import { ATTACK_SAVE, DAMAGE_EFFECT, SCHOOL } from "../const";
import { SourceType } from "data/types";

const data: SourceType = {
  meta: {
    name: "Basic Rules",
    abbreviation: "srd",
  },
  spells: [
    {
      name: "Acid Arrow",
      desc: `A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.`,
      higher_level: `When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd.`,
      page: "basic rules",
      range: "90 feet",
      components: ["V", "S", "M"],
      material: "Powdered rhubarb leaf and an adder's stomach",
      ritual: false,
      duration: "Instantaneous",
      concentration: false,
      casting_time: "1 action",
      level: 2,
      attack_save: [ATTACK_SAVE.RANGED],
      damage_effect: [DAMAGE_EFFECT.ACID],
      school: SCHOOL.EVOCATION,
    },
    {
      name: "Arcanist's Magic Aura",
      desc: `You place an illusion on a creature or an object you touch so that divination spells reveal false information about it. The target can be a willing creature or an object that isn't being carried or worn by another creature.

When you cast the spell, choose one or both of the following effects. The effect lasts for the duration. If you cast this spell on the same creature or object every day for 30 days, placing the same effect on it each time, the illusion lasts until it is dispelled.

### False Aura

You change the way the target appears to spells and magical effects, such as detect magic, that detect magical auras. You can make a nonmagical object appear magical, a magical object appear nonmagical, or change the object's magical aura so that it appears to belong to a specific school of magic that you choose. When you use this effect on an object, you can make the false magic apparent to any creature that handles the item.

### Mask

You change the way the target appears to spells and magical effects that detect creature types, such as a paladin's Divine Sense or the trigger of a symbol spell. You choose a creature type and other spells and magical effects treat the target as if it were a creature of that type or of that alignment.`,
      page: "basic rules",
      range: "Touch",
      components: ["V", "S", "M"],
      material: "A small square of silk",
      ritual: false,
      duration: "24 hours",
      concentration: false,
      casting_time: "1 action",
      level: 2,
      school: SCHOOL.ILLUSION,
      damage_effect: [DAMAGE_EFFECT.UTILITY],
    },
    {
      name: "Black Tentacles",
      desc: `Squirming, ebony tentacles fill a 20-foot square on ground that you can see within range. For the duration, these tentacles turn the ground in the area into difficult terrain.
      
When a creature enters the affected area for the first time on a turn or starts its turn there, the creature must succeed on a Dexterity saving throw or take 3d6 bludgeoning damage and be restrained by the tentacles until the spell ends. A creature that starts its turn in the area and is already restrained by the tentacles takes 3d6 bludgeoning damage.

A creature restrained by the tentacles can use its action to make a Strength or Dexterity check (its choice) against your spell save DC. On a success, it frees itself.`,
      page: "basic rules",
      range: "90 feet",
      components: ["V", "S", "M"],
      material: "A piece of tentacle of an octopus or a giant squid",
      ritual: false,
      duration: "1 minute",
      concentration: true,
      casting_time: "1 action",
      level: 4,
      school: SCHOOL.CONJURATION,
      attack_save: [ATTACK_SAVE.DEXTERITY],
      damage_effect: [DAMAGE_EFFECT.BLUDGEONING, DAMAGE_EFFECT.RESTRAINED],
    },
    {
      name: "Faithful Hound",
      desc: `You conjure a phantom watchdog in an unoccupied space that you can see within range, where it remains for the duration, until you dismiss it as an action, or until you move more than 100 feet away from it.
      
The hound is invisible to all creatures except you and can't be harmed. When a Small or larger creature comes within 30 feet of it without first speaking the password that you specify when you cast this spell, the hound starts barking loudly. The hound sees invisible creatures and can see into the Ethereal Plane. It ignores illusions.

At the start of each of your turns, the hound attempts to bite one creature within 5 feet of it that is hostile to you. The hound's attack bonus is equal to your spellcasting ability modifier + your proficiency bonus. On a hit, it deals 4d8 piercing damage.`,
      page: "basic rules",
      range: "30 feet",
      components: ["V", "S", "M"],
      material: "a tiny silver whistle, a piece of bone, and a thread",
      ritual: false,
      duration: "8 hours",
      concentration: false,
      casting_time: "1 action",
      level: 4,
      school: SCHOOL.CONJURATION,
      damage_effect: [DAMAGE_EFFECT.SUMMONING, DAMAGE_EFFECT.PIERCING],
    },
    {
      name: "Floating Disk",
      desc: `This spell creates a circular, horizontal plane of force, 3 feet in diameter and 1 inch thick, that floats 3 feet above the ground in an unoccupied space of your choice that you can see within range. The disk remains for the duration, and can hold up to 500 pounds. If more weight is placed on it, the spell ends, and everything on the disk falls to the ground.
      
The disk is immobile while you are within 20 feet of it. If you move more than 20 feet away from it, the disk follows you so that it remains within 20 feet of you. If can move across uneven terrain, up or down stairs, slopes and the like, but it can't cross an elevation change of 10 feet or more. For example, the disk can't move across a 10-foot-deep pit, nor could it leave such a pit if it was created at the bottom.

If you move more than 100 feet away from the disk (typically because it can't move around an obstacle to follow you), the spell ends.`,
      page: "basic rules",
      range: "30 feet",
      components: ["V", "S", "M"],
      material: "A drop of mercury",
      ritual: true,
      duration: "1 hour",
      concentration: false,
      casting_time: "1 action",
      level: 1,
      school: SCHOOL.CONJURATION,
      damage_effect: [DAMAGE_EFFECT.UTILITY],
    },
    {
      name: "Freezing Sphere",
      desc: `A frigid globe of cold energy streaks from your fingertips to a point of your choice within range, where it explodes in a 60-foot-radius sphere. Each creature within the area must make a Constitution saving throw. On a failed save, a creature takes 10d6 cold damage. On a successful save, it takes half as much damage.
      
If the globe strikes a body of water or a liquid that is principally water (not including water-based creatures), it freezes the liquid to a depth of 6 inches over an area 30 feet square. This ice lasts for 1 minute. Creatures that were swimming on the surface of frozen water are trapped in the ice. A trapped creature can use an action to make a Strength check against your spell save DC to break free.

You can refrain from firing the globe after completing the spell, if you wish. A small globe about the size of a sling stone, cool to the touch, appears in your hand. At any time, you or a creature you give the globe to can throw the globe (to a range of 40 feet) or hurl it with a sling (to the sling's normal range). It shatters on impact, with the same effect as the normal casting of the spell. You can also set the globe down without shattering it. After 1 minute, if the globe hasn't already shattered, it explodes.`,
      higher_level:
        "When you cast this spell using a spell slot of 7th level or higher, the damage increases by 1d6 for each slot level above 6th.",
      page: "basic rules",
      range: "300 feet",
      components: ["V", "S", "M"],
      material: "A small crystal sphere",
      ritual: false,
      duration: "Instantaneous",
      concentration: false,
      casting_time: "1 action",
      level: 6,
      school: SCHOOL.EVOCATION,
      damage_effect: [DAMAGE_EFFECT.COLD],
      attack_save: [ATTACK_SAVE.CONSTITUTION],
    },
    {
      name: "Hideous Laughter",
      desc: `A creature of your choice that you can see within range perceives everything as hilariously funny and falls into fits of laughter if this spell affects it. The target must succeed on a Wisdom saving throw or fall prone, becoming incapacitated and unable to stand up for the duration. A creature with an Intelligence score of 4 or less isn't affected.

      At the end of each of its turns, and each time it takes damage, the target can make another Wisdom saving throw. The target had advantage on the saving throw if it's triggered by damage. On a success, the spell ends.`,
      page: "basic rules",
      range: "30 feet",
      components: ["V", "S", "M"],
      material: "Tiny tarts and a feather that is waved in the air",
      ritual: false,
      duration: "1 minute",
      concentration: true,
      casting_time: "1 action",
      level: 1,
      school: SCHOOL.ENCHANTMENT,
      attack_save: [ATTACK_SAVE.WISDOM],
      damage_effect: [DAMAGE_EFFECT.PRONE, DAMAGE_EFFECT.INCAPACITATED],
    },
    {
      name: "Instant Summons",
      desc: `You touch an object weighing 10 pounds or less whose longest dimension is 6 feet or less. The spell leaves an invisible mark on its surface and invisibly inscribes the name of the item on the sapphire you use as the material component. Each time you cast this spell, you must use a different sapphire.

At any time thereafter, you can use your action to speak the item's name and crush the sapphire. The item instantly appears in your hand regardless of physical or planar distances, and the spell ends.
      
If another creature is holding or carrying the item, crushing the sapphire doesn't transport the item to you, but instead you learn who the creature possessing the object is and roughly where that creature is located at that moment.

_Dispel magic_ or a similar effect successfully applied to the sapphire ends this spell's effect.`,
      page: "basic rules",
      range: "Touch",
      components: ["V", "S", "M"],
      material: "A sapphire worth 1,000 gp",
      ritual: true,
      duration: "Until dispelled",
      concentration: false,
      casting_time: "1 minute",
      level: 6,
      school: SCHOOL.CONJURATION,
      damage_effect: [DAMAGE_EFFECT.UTILITY],
    },
    {
      name: "Magnificent Mansion",
      desc: `You conjure an extradimensional dwelling in range that lasts for the duration. You choose where its one entrance is located. The entrance shimmers faintly and is 5 feet wide and 10 feet tall. You and any creature you designate when you cast the spell can enter the extradimensional dwelling as long as the portal remains open. You can open or close the portal if you are within 30 feet of it. While closed, the portal is invisible.
      
Beyond the portal is a magnificent foyer with numerous chambers beyond. The atmosphere is clean, fresh, and warm.

You can create any floor plan you like, but the space can't exceed 50 cubes, each cube being 10 feet on each side. The place is furnished and decorated as you choose. It contains sufficient food to serve a nine course banquet for up to 100 people. A staff of 100 near-transparent servants attends all who enter. You decide the visual appearance of these servants and their attire. They are completely obedient to your orders. Each servant can perform any task a normal human servant could perform, but they can't attack or take any action that would directly harm another creature. Thus the servants can fetch things, clean, mend, fold clothes, light fires, serve food, pour wine, and so on. The servants can go anywhere in the mansion but can't leave it. Furnishings and other objects created by this spell dissipate into smoke if removed from the mansion. When the spell ends, any creatures inside the extradimensional space are expelled into the open spaces nearest to the entrance.`,
      page: "basic rules",
      range: "300 feet",
      components: ["V", "S", "M"],
      material:
        "a miniature portal carved from ivory, a small piece of polished marble, and a tiny silver spoon, each item worth at least 5 gp",
      ritual: false,
      duration: "24 hours",
      concentration: false,
      casting_time: "1 minute",
      level: 7,
      school: SCHOOL.CONJURATION,
      damage_effect: [DAMAGE_EFFECT.UTILITY],
    },
    {
      name: "Private Sanctum",
      desc: `You make an area within range magically secure. The area is a cube that can be as small as 5 feet to as large as 100 feet on each side. The spell lasts for the duration or until you use an action to dismiss it.
      
When you cast the spell, you decide what sort of security the spell provides, choosing any or all of the following properties:

* Sound can't pass through the barrier at the edge of the warded area.
* The barrier of the warded area appears dark and foggy, preventing vision (including darkvision) through it.
* Sensors created by divination spells can't appear inside the protected area or pass through the barrier at its perimeter.
* Creatures in the area can't be targeted by divination spells.
* Nothing can teleport into or out of the warded area.
* Planar travel is blocked within the warded area.

Casting this spell on the same spot every day for a year makes this effect permanent.`,
      higher_level:
        "When you cast this spell using a spell slot of 5th level or higher, you can increase the size of the cube by 100 feet for each slot level beyond 4th. Thus you could protect a cube that can be up to 200 feet on one side by using a spell slot of 5th level.",
      page: "basic rules",
      range: "120 feet",
      components: ["V", "S", "M"],
      material:
        "a thin sheet of lead, a piece of opaque glass, a wad of cotton or cloth, and powdered chrysolite",
      ritual: false,
      duration: "24 hours",
      concentration: false,
      casting_time: "10 minutes",
      level: 4,
      school: SCHOOL.ABJURATION,
      damage_effect: [DAMAGE_EFFECT.UTILITY],
    },
    {
      name: "Resilient Sphere",
      desc: `A sphere of shimmering force encloses a creature or object of Large size or smaller within range. An unwilling creature must make a Dexterity saving throw. On a failed save, the creature is enclosed for the duration.

Nothing—not physical objects, energy, or other spell effects—can pass through the barrier, in or out, though a creature in the sphere can breathe there. The sphere is immune to all damage, and a creature or object inside can't be damaged by attacks or effects originating from outside, nor can a creature inside the sphere damage anything outside it.

The sphere is weightless and just large enough to contain the creature or object inside. An enclosed creature can use its action to push against the sphere's walls and thus roll the sphere at up to half the creature's speed. Similarly, the globe can be picked up and moved by other creatures.

A _disintegrate_ spell targeting the globe destroys it without harming anything inside it.`,
      page: "basic rules",
      range: "30 feet",
      components: ["V", "S", "M"],
      material:
        "a hemispherical piece of clear crystal and a matching hemispherical piece of gum arabic",
      ritual: false,
      duration: "1 minute",
      concentration: true,
      casting_time: "1 action",
      level: 4,
      school: SCHOOL.EVOCATION,
      attack_save: [ATTACK_SAVE.DEXTERITY],
      damage_effect: [DAMAGE_EFFECT.CONTROL],
    },
    {
      name: "Telepathic Bond",
      desc: `You forge a telepathic link among up to eight willing creatures of your choice within range, psychically linking each creature to all the others for the duration. Creatures with Intelligence scores of 2 or less aren't affected by this spell.
      
Until the spell ends, the targets can communicate telepathically through the bond whether or not they have a common language. The communication is possible over any distance, though it can't extend to other planes of existence.`,
      page: "basic rules",
      range: "30 feet",
      components: ["V", "S", "M"],
      material: "pieces of eggshell from two different kinds of creatures",
      ritual: true,
      duration: "1 hour",
      concentration: false,
      casting_time: "1 action",
      level: 5,
      school: SCHOOL.DIVINATION,
      damage_effect: [DAMAGE_EFFECT.COMMUNICATION],
    },
    {
      name: "Tiny Hut",
      desc: `A 10-foot-radius immobile dome of force springs into existence around and above you and remains stationary for the duration. The spell ends if you leave its area.
      
Nine creatures of Medium size or smaller can fit inside the dome with you. The spell fails if its area includes a larger creature or more than nine creatures. Creatures and objects within the dome when you cast this spell can move through it freely. All other creatures and objects are barred from passing through it. Spells and other magical effects can't extend through the dome or be cast through it. The atmosphere inside the space is comfortable and dry, regardless of the weather outside.

Until the spell ends, you can command the interior to become dimly lit or dark. The dome is opaque from the outside, of any color you choose, but it is transparent from the inside.`,
      page: "basic rules",
      range: "Self",
      components: ["V", "S", "M"],
      material: "a small crystal bead",
      ritual: true,
      duration: "8 hours",
      concentration: false,
      casting_time: "1 minute",
      level: 3,
      school: SCHOOL.EVOCATION,
      damage_effect: [DAMAGE_EFFECT.UTILITY],
    },
    {
      name: "Arcane Hand",
      desc: `You create a Large hand of shimmering, translucent force in an unoccupied space that you can see within range. The hand lasts for the spell's duration, and it moves at your command, mimicking the movements of your own hand.

The hand is an object that has AC 20 and hit points equal to your hit point maximum. If it drops to 0 hit points, the spell ends. It has a Strength of 26 (+8) and a Dexterity of 10 (+0). The hand doesn't fill its space.

When you cast the spell and as a bonus action on your subsequent turns, you can move the hand up to 60 feet and then cause one of the following effects with it.

### Clenched Fist

The hand strikes one creature or object within 5 feet of it. Make a melee spell attack for the hand using your game statistics. On a hit, the target takes 4d8 force damage.

### Forceful Hand

The hand attempts to push a creature within 5 feet of it in a direction you choose. Make a check with the hand's Strength contested by the Strength (Athletics) check of the target. If the target is Medium or smaller, you have advantage on the check. If you succeed, the hand pushes the target up to 5 feet plus a number of feet equal to five times your spellcasting ability modifier. The hand moves with the target to remain within 5 feet of it.

### Grasping Hand

The hand attempts to grapple a Huge or smaller creature within 5 feet of it. You use the hand's Strength score to resolve the grapple. If the target is Medium or smaller, you have advantage on the check. While the hand is grappling the target, you can use a bonus action to have the hand crush it. When you do so, the target takes bludgeoning damage equal to 2d6 + your spellcasting ability modifier.

### Interposing Hand

The hand interposes itself between you and a creature you choose until you give the hand a different command. The hand moves to stay between you and the target, providing you with half cover against the target. The target can't move through the hand's space if its Strength score is less than or equal to the hand's Strength score. If its Strength score is higher than the hand's Strength score, the target can move toward you through the hand's space, but that space is difficult terrain for the target.`,
      higher_level: `When you cast this spell using a spell slot of 6th level or higher, the damage from the clenched fist option increases by 2d8 and the damage from the grasping hand increases by 2d6 for each slot level above 5th.`,
      page: "basic rules",
      range: "120 feet",
      components: ["V", "S", "M"],
      material: "An eggshell and a snakeskin glove",
      ritual: false,
      duration: "1 minute",
      concentration: true,
      casting_time: "1 action",
      level: 5,
      school: SCHOOL.EVOCATION,
      attack_save: [ATTACK_SAVE.MELEE, ATTACK_SAVE.STRENGTH],
      damage_effect: [
        DAMAGE_EFFECT.FORCE,
        DAMAGE_EFFECT.CONTROL,
        DAMAGE_EFFECT.BLUDGEONING,
        DAMAGE_EFFECT.GRAPPLE,
      ],
    },
  ],
};

export default data;
