import { toKebabCase } from "@src/utils";
import { ClassType } from "@data/types";

const data: ClassType = {
  name: "Paladin",
  subclass_label: "Oath",
  subclasses: [
    {
      name: "Conquest",
      spell_list: [
        toKebabCase("armor of Agathys"),
        toKebabCase("command"),
        toKebabCase("hold person"),
        toKebabCase("spiritual weapon"),
        toKebabCase("bestow curse"),
        toKebabCase("fear"),
        toKebabCase("dominate beast"),
        toKebabCase("stoneskin"),
        toKebabCase("cloudkill"),
        toKebabCase("dominate person"),
      ],
    },
    {
      name: "Devotion",
      spell_list: [
        toKebabCase("protection from evil and good"),
        toKebabCase("sanctuary"),
        toKebabCase("lesser restoration"),
        toKebabCase("zone of truth"),
        toKebabCase("beacon of hope"),
        toKebabCase("dispel magic"),
        toKebabCase("freedom of movement"),
        toKebabCase("guardian of faith"),
        toKebabCase("commune"),
        toKebabCase("flame strike"),
      ],
    },
    {
      name: "Glory",
      spell_list: [
        toKebabCase("guiding bolt"),
        toKebabCase("heroism"),
        toKebabCase("enhance ability"),
        toKebabCase("magic weapon"),
        toKebabCase("haste"),
        toKebabCase("protection from energy"),
        toKebabCase("compulsion"),
        toKebabCase("freedom of movement"),
        toKebabCase("commune"),
        toKebabCase("flame strike"),
      ],
    },
    {
      name: "Redemption",
      spell_list: [
        toKebabCase("sanctuary"),
        toKebabCase("sleep"),
        toKebabCase("calm emotions"),
        toKebabCase("hold person"),
        toKebabCase("counterspell"),
        toKebabCase("hypnotic pattern"),
        toKebabCase("Otiluke's resilient sphere"),
        toKebabCase("stoneskin"),
        toKebabCase("hold monster"),
        toKebabCase("wall of force"),
      ],
    },
    {
      name: "Ancients",
      spell_list: [
        toKebabCase("ensnaring strike"),
        toKebabCase("speak with animals"),
        toKebabCase("misty step"),
        toKebabCase("moonbeam"),
        toKebabCase("plant growth"),
        toKebabCase("protection from energy"),
        toKebabCase("ice storm"),
        toKebabCase("stoneskin"),
        toKebabCase("commune with nature"),
        toKebabCase("tree stride"),
      ],
    },
    {
      name: "Crown",
      spell_list: [
        toKebabCase("command"),
        toKebabCase("compelled duel"),
        toKebabCase("warding bond"),
        toKebabCase("zone of truth"),
        toKebabCase("aura of vitality"),
        toKebabCase("spirit guardians"),
        toKebabCase("banishment"),
        toKebabCase("guardian of faith"),
        toKebabCase("circle of power"),
        toKebabCase("geas"),
      ],
    },
    {
      name: "The Watchers",
      spell_list: [
        toKebabCase("alarm"),
        toKebabCase("detect magic"),
        toKebabCase("moonbeam"),
        toKebabCase("see invisibility"),
        toKebabCase("counterspell"),
        toKebabCase("nondetection"),
        toKebabCase("aura of purity"),
        toKebabCase("banishment"),
        toKebabCase("hold monster"),
        toKebabCase("scrying"),
      ],
    },
    {
      name: "Vengeance",
      spell_list: [
        toKebabCase("bane"),
        toKebabCase("hunter's mark"),
        toKebabCase("hold person"),
        toKebabCase("misty step"),
        toKebabCase("haste"),
        toKebabCase("protection from energy"),
        toKebabCase("banishment"),
        toKebabCase("dimension door"),
        toKebabCase("hold monster"),
        toKebabCase("scrying"),
      ],
    },
    {
      name: "Oathbreaker",
      spell_list: [
        toKebabCase("hellish rebuke"),
        toKebabCase("inflict wounds"),
        toKebabCase("crown of madness"),
        toKebabCase("darkness"),
        toKebabCase("animate dead"),
        toKebabCase("bestow curse"),
        toKebabCase("blight"),
        toKebabCase("confusion"),
        toKebabCase("contagion"),
        toKebabCase("dominate person"),
      ],
    },
  ],
  spell_list: [
    toKebabCase("Bless"),
    toKebabCase("Command"),
    toKebabCase("Compelled Duel"),
    toKebabCase("Cure Wounds"),
    toKebabCase("Detect Evil and Good"),
    toKebabCase("Detect Magic"),
    toKebabCase("Detect Poison and Disease"),
    toKebabCase("Divine Favor"),
    toKebabCase("Heroism"),
    toKebabCase("Protection from Evil and Good"),
    toKebabCase("Purify Food and Drink"),
    toKebabCase("Searing Smite"),
    toKebabCase("Shield of Faith"),
    toKebabCase("Thunderous Smite"),
    toKebabCase("Wrathful Smite"),
    toKebabCase("Aid"),
    toKebabCase("Branding Smite"),
    toKebabCase("Find Steed"),
    toKebabCase("Lesser Restoration"),
    toKebabCase("Locate Object"),
    toKebabCase("Magic Weapon"),
    toKebabCase("Protection from Poison"),
    toKebabCase("Zone of Truth"),
    toKebabCase("Aura of Vitality"),
    toKebabCase("Blinding Smite"),
    toKebabCase("Create Food and Water"),
    toKebabCase("Crusader's Mantle"),
    toKebabCase("Daylight"),
    toKebabCase("Dispel Magic"),
    toKebabCase("Elemental Weapon"),
    toKebabCase("Magic Circle"),
    toKebabCase("Remove Curse"),
    toKebabCase("Revivify"),
    toKebabCase("Aura of Life"),
    toKebabCase("Aura of Purity"),
    toKebabCase("Banishment"),
    toKebabCase("Death Ward"),
    toKebabCase("Locate Creature"),
    toKebabCase("Staggering Smite"),
    toKebabCase("Banishing Smite"),
    toKebabCase("Circle of Power"),
    toKebabCase("Destructive Wave"),
    toKebabCase("Dispel Evil and Good"),
    toKebabCase("Geas"),
    toKebabCase("Raise Dead"),
    toKebabCase("Ceremony"),
    toKebabCase("Find greater steed"),
    toKebabCase("Holy weapon"),
  ],
  additional_spells: [
    toKebabCase("Gentle repose"),
    toKebabCase("Prayer of healing"),
    toKebabCase("Warding bond"),
    toKebabCase("Spirit shroud"),
    toKebabCase("Summon celestial"),
  ],
};

export default data;
