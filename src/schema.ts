import { Prisma, Spell, Source, Class, Subclass } from ".prisma/client";
import { gql } from "apollo-server";

import { ATTACK_SAVE, COMPONENTS, DAMAGE_EFFECT, SCHOOL } from "@data/const";
import type { Context } from "./context";

export const typeDefs = gql`
  type Source {
    id: ID!
    name: String!
    abbreviation: String!
    spells: [Spell!]
  }

  enum SpellComponents {
    VERBAL
    SOMATIC
    MATERIAL
  }

  enum SpellSchool {
    ABJURATION
    CONJURATION
    DIVINATION
    ENCHANTMENT
    EVOCATION
    ILLUSION
    NECROMANCY
    TRANSMUTATION
  }

  enum SpellAttackSave {
    MELEE
    RANGED
    STRENGTH
    DEXTERITY
    CONSTITUTION
    INTELLIGENCE
    WISDOM
    CHARISMA
  }

  enum SpellDamageEffect {
    ACID
    BLINDED
    BLUDGEONING
    BUFF
    CHARMED
    COLD
    COMMUNICATION
    CONTROL
    DEBUFF
    DEAFENED
    FIRE
    FORCE
    FRIGHTENED
    GRAPPLE
    HEALING
    INCAPACITATED
    LIGHTNING
    NECROTIC
    MOVEMENT
    POISON
    PIERCING
    PRONE
    PSYCHIC
    RADIANT
    RESTRAINED
    SLASHING
    STUNNED
    SUMMONING
    TELEPORTATION
    THUNDER
    UTILITY
  }

  type Spell {
    id: ID!
    name: String!
    slug: String!
    description: String!
    higherLevel: String
    range: String!
    components: [SpellComponents!]!
    material: String!
    ritual: Boolean!
    duration: String!
    concentration: Boolean!
    castingTime: String!
    castingTimeModifier: String
    level: Int!
    school: SpellSchool!
    attackSave: [SpellAttackSave]
    damageEffect: [SpellDamageEffect]
    sources: [Source!]
    classes: [Class!]
    subclasses: [Subclass!]
  }

  type Class {
    id: ID!
    name: String!
    subclassLabel: String!
    spellList: [Spell!]!
    additionalSpellList: [Spell!]
    subclasses: [Subclass!]!
  }

  type Subclass {
    id: ID!
    name: String!
    spellList: [Spell!]!
    parentClass: Class!
  }

  enum SortOrder {
    asc
    desc
  }

  input SpellOrderByInput {
    name: SortOrder
    level: SortOrder
    school: SortOrder
  }

  type Query {
    info: String!
    allSources: [Source!]!
    sourceById(id: Int): Source
    allSpells: [Spell!]!
    spellById(id: Int): Spell
    allClasses: [Class!]!
    classById(id: Int): Class
    spellFeed(
      searchString: String
      isRitual: Boolean
      isConcentration: Boolean
      minLevel: Int
      maxLevel: Int
      schools: [SpellSchool]
      orderBy: SpellOrderByInput
      skip: Int
      take: Int
    ): [Spell!]!
  }
`;

export const resolvers = {
  SpellAttackSave: ATTACK_SAVE,
  SpellDamageEffect: DAMAGE_EFFECT,
  SpellComponents: COMPONENTS,
  SpellSchool: SCHOOL,
  Query: {
    info: (): string => `This is the API of Spellbook 2.0`,
    allSources: async (
      _parent: unknown,
      _args: unknown,
      context: Context
    ): Promise<Source[]> => {
      return context.prisma.source.findMany();
    },
    sourceById: async (
      _parent: unknown,
      args: { id: number },
      context: Context
    ): Promise<Source | null> => {
      return context.prisma.source.findUnique({ where: { id: args.id } });
    },
    allSpells: async (
      _parent: unknown,
      _args: unknown,
      context: Context
    ): Promise<Spell[]> => {
      return context.prisma.spell.findMany();
    },
    spellById: async (
      _parent: unknown,
      args: { id: number },
      context: Context
    ): Promise<Spell | null> => {
      return context.prisma.spell.findUnique({ where: { id: args.id } });
    },
    allClasses: async (
      _parent: unknown,
      _args: unknown,
      context: Context
    ): Promise<Class[]> => {
      return context.prisma.class.findMany();
    },
    classById: async (
      _parent: unknown,
      args: { id: number },
      context: Context
    ): Promise<Class | null> => {
      return context.prisma.class.findUnique({ where: { id: args.id } });
    },
    spellFeed: async (
      _parent: unknown,
      args: Partial<SpellFilterArgs>,
      context: Context
    ): Promise<Spell[]> => {
      return context.prisma.spell.findMany({
        where: {
          OR: [
            { name: { contains: args.searchString } },
            { description: { contains: args.searchString } },
          ],
          ritual: args.isRitual,
          concentration: args.isConcentration,
          school: {
            in: args.schools,
          },
          level: {
            gte: args.minLevel,
            lte: args.maxLevel,
          },
        },
        take: args.take,
        skip: args.skip,
        orderBy: args.orderBy
          ? Object.entries(args.orderBy).map((entry) => ({
              [entry[0]]: entry[1],
            }))
          : undefined,
      });
    },
  },
  Source: {
    spells: async (
      parent: Source,
      _args: unknown,
      context: Context
    ): Promise<Spell[]> => {
      const result = await context.prisma.spellSource.findMany({
        where: { sourceId: parent.id },
        include: { Spell: true },
      });
      return result.map((spellSource) => spellSource.Spell);
    },
  },
  Spell: {
    sources: async (
      parent: Spell,
      _args: unknown,
      context: Context
    ): Promise<Source[]> => {
      const result = await context.prisma.spellSource.findMany({
        where: { spellId: parent.id },
        include: { Source: true },
      });
      return result.map((spellSource) => spellSource.Source);
    },
    components: (parent: Spell): COMPONENTS[] | undefined => {
      if (!parent.components) {
        return;
      }
      const list = parent.components.split(",");
      return list.map((c) => {
        switch (c.toLowerCase()) {
          case "v":
            return COMPONENTS.VERBAL;
            break;
          case "s":
            return COMPONENTS.SOMATIC;
          case "m":
            return COMPONENTS.MATERIAL;
          default:
            break;
        }
      }) as COMPONENTS[];
    },
    attackSave: (parent: Spell): string[] | undefined => {
      if (!parent.attackSave) {
        return;
      }
      if (!Array.isArray(parent.attackSave)) {
        return [parent.attackSave];
      }
      return parent.attackSave;
    },
    damageEffect: (parent: Spell): string[] | undefined => {
      if (!parent.damageEffect) {
        return;
      }
      if (!Array.isArray(parent.damageEffect)) {
        return [parent.damageEffect];
      }
      return parent.damageEffect;
    },
    classes: async (
      parent: Spell,
      _args: unknown,
      context: Context
    ): Promise<Class[]> => {
      const result = await context.prisma.classSpellList.findMany({
        where: { spellId: parent.id },
        include: { Class: true },
      });
      return result.map((item) => item.Class);
    },
    subclasses: async (
      parent: Spell,
      _args: unknown,
      context: Context
    ): Promise<Subclass[]> => {
      const result = await context.prisma.subclassSpellList.findMany({
        where: { spellId: parent.id },
        include: { Subclass: true },
      });
      return result.map((item) => item.Subclass);
    },
  },
  Class: {
    spellList: async (
      parent: Class,
      _args: unknown,
      context: Context
    ): Promise<Spell[]> => {
      const result = await context.prisma.classSpellList.findMany({
        where: { classId: parent.id, isAdditional: false },
        include: { Spell: true },
      });
      return result.map((list) => list.Spell);
    },
    additionalSpellList: async (
      parent: Class,
      _args: unknown,
      context: Context
    ): Promise<Spell[]> => {
      const result = await context.prisma.classSpellList.findMany({
        where: { classId: parent.id, isAdditional: true },
        include: { Spell: true },
      });
      return result.map((list) => list.Spell);
    },
    subclasses: async (
      parent: Class,
      _args: unknown,
      context: Context
    ): Promise<Subclass[]> => {
      const result = await context.prisma.subclass.findMany({
        where: { classId: parent.id },
      });
      return result;
    },
  },
  Subclass: {
    spellList: async (
      parent: Subclass,
      _args: unknown,
      context: Context
    ): Promise<Spell[]> => {
      const result = await context.prisma.subclassSpellList.findMany({
        where: { subclassId: parent.id },
        include: { Spell: true },
      });
      return result.map((list) => list.Spell);
    },
    parentClass: async (
      parent: Subclass,
      _args: unknown,
      context: Context
    ): Promise<Class[]> => {
      const result = await context.prisma.class.findMany({
        where: { id: parent.classId },
      });
      return result;
    },
  },
};

interface SpellFilterArgs {
  searchString: string;
  isRitual: boolean;
  isConcentration: boolean;
  minLevel: number;
  maxLevel: number;
  schools: SCHOOL[];
  orderBy: Prisma.SpellOrderByWithRelationInput;
  skip: number;
  take: number;
}
