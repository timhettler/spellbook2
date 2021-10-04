import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { toKebabCase } from "src/utils/toKebabCase";

// Spell Sources
import BASIC from "data/spells/basic";
import PHB from "data/spells/phb";
import XGTE from "data/spells/xgte";
import LLOK from "data/spells/llok";
import TCOE from "data/spells/tcoe";
import { SubclassType } from "data/types";

const SPELL_SOURCES = [BASIC, PHB, XGTE, LLOK, TCOE];

// Class Information
import ARTIFICER from "data/classes/artificer";
import BARD from "data/classes/bard";
import CLERIC from "data/classes/cleric";
import DRUID from "data/classes/druid";
import PALADIN from "data/classes/paladin";
import RANGER from "data/classes/ranger";
import SORCERER from "data/classes/sorcerer";
import WARLOCK from "data/classes/warlock";
import WIZARD from "data/classes/wizard";

const CLASS_INFO = [
  ARTIFICER,
  BARD,
  CLERIC,
  DRUID,
  PALADIN,
  RANGER,
  SORCERER,
  WARLOCK,
  WIZARD,
];

function convertToString(strOrArray?: string | string[] | null) {
  if (Array.isArray(strOrArray)) {
    return strOrArray.join(",");
  }
  return strOrArray;
}

function generateSubclassEntries(sublasses: SubclassType[]) {
  return sublasses.map((subclass) =>
    Prisma.validator<Prisma.SubclassCreateWithoutClassInput>()({
      name: subclass.name,
    })
  );
}

async function main() {
  // Using for loops here so that queries are execute syncronously. qlite does not support "multi-user use cases", meaning only one thread can be writing to it at a time.
  for (const source of SPELL_SOURCES) {
    const sourceResult = await prisma.source.upsert({
      where: { name: source.meta.name },
      update: {},
      create: {
        name: source.meta.name,
        abbreviation: source.meta.abbreviation,
      },
    });

    console.log(`created source ${sourceResult.name}`);

    // TODO handle spell being in multiple sources
    for (const spell of source.spells) {
      const spellResult = await prisma.spell.upsert({
        where: { name: spell.name },
        update: {},
        create: {
          name: spell.name,
          slug: toKebabCase(spell.name),
          description: spell.desc,
          higherLevel: spell.higher_level || null,
          range: spell.range,
          components: spell.components.join(","),
          material: spell.material || null,
          ritual: spell.ritual,
          duration: spell.duration,
          concentration: spell.concentration,
          castingTime: spell.casting_time,
          castingTimeModifier: spell.casting_time_modifier,
          level: spell.level,
          school: spell.school,
          attackSave: convertToString(spell.attack_save),
          damageEffect: convertToString(spell.damage_effect),
          SpellSource: {
            create:
              Prisma.validator<Prisma.SpellSourceUncheckedCreateWithoutSpellInput>()(
                {
                  sourceId: sourceResult.id,
                }
              ),
          },
        },
      });
      console.log(
        `created spell ${spellResult.name} (from ${sourceResult.abbreviation})`
      );
    }
  }

  for (const pclass of CLASS_INFO) {
    const classResult = await prisma.class.upsert({
      where: { name: pclass.name },
      update: {},
      create: {
        name: pclass.name,
        subclassLabel: pclass.subclass_label,
        subclasses: {
          create: generateSubclassEntries(pclass.subclasses),
        },
      },
    });

    // Get the ids of all spells in class list and create join table for each spell
    await Promise.all(
      pclass.spell_list.map(async (spellSlug) => {
        const spellResult = await prisma.spell.findFirst({
          where: { slug: spellSlug },
        });

        if (!spellResult) {
          throw new Error(
            `No corresponding spell found for slug ${spellSlug} (spell for ${classResult.name})`
          );
        }

        await prisma.classSpellList.create({
          data: {
            classId: classResult.id,
            spellId: spellResult.id,
          },
        });
      })
    );

    console.log(`created spell list for ${pclass.name}...`);

    if (pclass.additional_spells?.length) {
      await Promise.all(
        pclass.additional_spells.map(async (spellSlug) => {
          const spellResult = await prisma.spell.findFirst({
            where: { slug: spellSlug },
          });

          if (!spellResult) {
            throw new Error(
              `No corresponding spell found for slug ${spellSlug} (additional spell for ${pclass.name})`
            );
          }

          await prisma.classSpellList.create({
            data: {
              classId: classResult.id,
              spellId: spellResult.id,
              isAdditional: true,
            },
          });
        })
      );

      console.log(`created additional spell list for ${pclass.name}...`);
    }

    // Do the same for each subclass
    const subclassResult = await prisma.subclass.findMany({
      where: { classId: classResult.id },
    });

    await Promise.all(
      pclass.subclasses.map(async (subClass) => {
        const subclassEntry = subclassResult.find(
          (sc) => sc.name === subClass.name
        );

        if (!subclassEntry) {
          return;
        }

        await Promise.all(
          subClass.spell_list.map(async (spellSlug) => {
            const spellResult = await prisma.spell.findFirst({
              where: { slug: spellSlug },
            });

            if (!spellResult) {
              throw new Error(
                `No corresponding spell found for slug ${spellSlug} (spell for ${pclass.name} / ${subClass.name})`
              );
            }

            if (spellResult?.id) {
              await prisma.subclassSpellList.create({
                data: {
                  subclassId: subclassEntry.id,
                  spellId: spellResult.id,
                },
              });
            }
          })
        );

        console.log(
          `created spell list for ${pclass.name} / ${subClass.name}...`
        );
      })
    );
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
