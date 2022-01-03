import { toKebabCase } from "@src/utils";
import { ClassType } from "@data/types";

const data: ClassType = {
  name: "Ranger",
  subclass_label: "Archetype",
  subclasses: [
    {
      name: "Fey Wanderer",
      spell_list: [
        toKebabCase("charm person"),
        toKebabCase("misty step"),
        toKebabCase("dispel magic"),
        toKebabCase("dimension door"),
        toKebabCase("mislead"),
      ],
    },
    {
      name: "Gloom Stalker",
      spell_list: [
        toKebabCase("disguise self"),
        toKebabCase("rope trick"),
        toKebabCase("fear"),
        toKebabCase("greater invisibility"),
        toKebabCase("seeming"),
      ],
    },
    {
      name: "Horizon Walker",
      spell_list: [
        toKebabCase("protection from evil and good"),
        toKebabCase("misty step"),
        toKebabCase("haste"),
        toKebabCase("banishment"),
        toKebabCase("teleportation circle"),
      ],
    },
    {
      name: "Monster Slayer",
      spell_list: [
        toKebabCase("protection from evil and good"),
        toKebabCase("zone of truth"),
        toKebabCase("magic circle"),
        toKebabCase("banishment"),
        toKebabCase("hold monster"),
      ],
    },
    {
      name: "Swarmkeeper",
      spell_list: [
        toKebabCase("faerie fire"),
        toKebabCase("mage hand"),
        toKebabCase("web"),
        toKebabCase("gaseous form"),
        toKebabCase("arcane eye"),
        toKebabCase("insect plague"),
      ],
    },
  ],
  spell_list: [
    toKebabCase("Alarm"),
    toKebabCase("Animal Friendship"),
    toKebabCase("Cure Wounds"),
    toKebabCase("Detect Magic"),
    toKebabCase("Detect Poison and Disease"),
    toKebabCase("Ensnaring Strike"),
    toKebabCase("Fog Cloud"),
    toKebabCase("Goodberry"),
    toKebabCase("Hail of Thorns"),
    toKebabCase("Hunter's Mark"),
    toKebabCase("Jump"),
    toKebabCase("Longstrider"),
    toKebabCase("Speak with Animals"),
    toKebabCase("Animal Messenger"),
    toKebabCase("Barkskin"),
    toKebabCase("Beast Sense"),
    toKebabCase("Cordon of Arrows"),
    toKebabCase("Darkvision"),
    toKebabCase("Find Traps"),
    toKebabCase("Lesser Restoration"),
    toKebabCase("Locate Animals or Plants"),
    toKebabCase("Locate Object"),
    toKebabCase("Pass without Trace"),
    toKebabCase("Protection from Poison"),
    toKebabCase("Silence"),
    toKebabCase("Spike Growth"),
    toKebabCase("Conjure Animals"),
    toKebabCase("Conjure Barrage"),
    toKebabCase("Daylight"),
    toKebabCase("Lightning Arrow"),
    toKebabCase("Nondetection"),
    toKebabCase("Plant Growth"),
    toKebabCase("Protection from Energy"),
    toKebabCase("Speak with Plants"),
    toKebabCase("Water Breathing"),
    toKebabCase("Water Walk"),
    toKebabCase("Wind Wall"),
    toKebabCase("Conjure Woodland Beings"),
    toKebabCase("Freedom of Movement"),
    toKebabCase("Grasping Vine"),
    toKebabCase("Locate Creature"),
    toKebabCase("Stoneskin"),
    toKebabCase("Commune with Nature"),
    toKebabCase("Conjure Volley"),
    toKebabCase("Swift Quiver"),
    toKebabCase("Tree Stride"),
    toKebabCase("Absorb elements"),
    toKebabCase("Beast bond"),
    toKebabCase("Snare"),
    toKebabCase("Zephyr strike"),
    toKebabCase("Healing spirit"),
    toKebabCase("Flame arrows"),
    toKebabCase("Guardian of nature"),
    toKebabCase("Steel wind strike"),
    toKebabCase("Wrath of nature"),
  ],
  additional_spells: [
    toKebabCase("Entangle"),
    toKebabCase("Searing smite"),
    toKebabCase("Aid"),
    toKebabCase("Enhance ability"),
    toKebabCase("Gust of wind"),
    toKebabCase("Magic weapon"),
    toKebabCase("Summon beast"),
    toKebabCase("Elemental weapon"),
    toKebabCase("Meld into stone"),
    toKebabCase("Revivify"),
    toKebabCase("Summon fey"),
    toKebabCase("Dominate beast"),
    toKebabCase("Summon elemental"),
    toKebabCase("Greater restoration"),
  ],
};

export default data;
