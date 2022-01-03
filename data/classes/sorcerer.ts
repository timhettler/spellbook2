import { toKebabCase } from "@src/utils";
import { ClassType } from "@data/types";

const data: ClassType = {
  name: "Sorcerer",
  subclass_label: "Origin",
  subclasses: [
    {
      name: "Aberrant Mind",
      spell_list: [
        toKebabCase("arms of Hadar"),
        toKebabCase("dissonant whispers"),
        toKebabCase("mind sliver"),
        toKebabCase("calm emotions"),
        toKebabCase("detect thoughts"),
        toKebabCase("hunger of Hadar"),
        toKebabCase("sending"),
        toKebabCase("Evard's black tentacles"),
        toKebabCase("summon aberration"),
        toKebabCase("Rary's telepathic bond"),
        toKebabCase("telekinesis"),
      ],
    },
    {
      name: "Clockwork Soul",
      spell_list: [
        toKebabCase("alarm"),
        toKebabCase("protection from evil and good"),
        toKebabCase("aid"),
        toKebabCase("lesser restoration"),
        toKebabCase("dispel magic"),
        toKebabCase("protection from energy"),
        toKebabCase("freedom of movement"),
        toKebabCase("summon construct"),
        toKebabCase("greater restoration"),
        toKebabCase("wall of force"),
      ],
    },
    {
      name: "Divine Soul",
      spell_list: [
        toKebabCase("cure wounds"),
        toKebabCase("inflict wounds"),
        toKebabCase("bless"),
        toKebabCase("bane"),
        toKebabCase("protection from evil and good"),
      ],
    },
  ],
  spell_list: [
    toKebabCase("Acid Splash"),
    toKebabCase("Blade Ward"),
    toKebabCase("Chill Touch"),
    toKebabCase("Dancing Lights"),
    toKebabCase("Fire Bolt"),
    toKebabCase("Friends"),
    toKebabCase("Light"),
    toKebabCase("Mage Hand"),
    toKebabCase("Mending"),
    toKebabCase("Message"),
    toKebabCase("Minor Illusion"),
    toKebabCase("Poison Spray"),
    toKebabCase("Prestidigitation"),
    toKebabCase("Ray of Frost"),
    toKebabCase("Shocking Grasp"),
    toKebabCase("True Strike"),
    toKebabCase("Burning Hands"),
    toKebabCase("Charm Person"),
    toKebabCase("Chromatic Orb"),
    toKebabCase("Color Spray"),
    toKebabCase("Comprehend Languages"),
    toKebabCase("Detect Magic"),
    toKebabCase("Disguise Self"),
    toKebabCase("Expeditious Retreat"),
    toKebabCase("False Life"),
    toKebabCase("Feather Fall"),
    toKebabCase("Fog Cloud"),
    toKebabCase("Jump"),
    toKebabCase("Mage Armor"),
    toKebabCase("Magic Missile"),
    toKebabCase("Ray of Sickness"),
    toKebabCase("Shield"),
    toKebabCase("Silent Image"),
    toKebabCase("Sleep"),
    toKebabCase("Thunderwave"),
    toKebabCase("Witch Bolt"),
    toKebabCase("Alter Self"),
    toKebabCase("Blindness/Deafness"),
    toKebabCase("Blur"),
    toKebabCase("Cloud of Daggers"),
    toKebabCase("Crown of Madness"),
    toKebabCase("Darkness"),
    toKebabCase("Darkvision"),
    toKebabCase("Detect Thoughts"),
    toKebabCase("Enhance Ability"),
    toKebabCase("Enlarge/Reduce"),
    toKebabCase("Gust of Wind"),
    toKebabCase("Hold Person"),
    toKebabCase("Invisibility"),
    toKebabCase("Knock"),
    toKebabCase("Levitate"),
    toKebabCase("Mirror Image"),
    toKebabCase("Misty Step"),
    toKebabCase("Phantasmal Force"),
    toKebabCase("Scorching Ray"),
    toKebabCase("See Invisibility"),
    toKebabCase("Shatter"),
    toKebabCase("Spider Climb"),
    toKebabCase("Suggestion"),
    toKebabCase("Web"),
    toKebabCase("Blink"),
    toKebabCase("Clairvoyance"),
    toKebabCase("Counterspell"),
    toKebabCase("Daylight"),
    toKebabCase("Dispel Magic"),
    toKebabCase("Fear"),
    toKebabCase("Fireball"),
    toKebabCase("Fly"),
    toKebabCase("Gaseous Form"),
    toKebabCase("Haste"),
    toKebabCase("Hypnotic Pattern"),
    toKebabCase("Lightning Bolt"),
    toKebabCase("Major Image"),
    toKebabCase("Protection from Energy"),
    toKebabCase("Sleet Storm"),
    toKebabCase("Slow"),
    toKebabCase("Stinking Cloud"),
    toKebabCase("Tongues"),
    toKebabCase("Water Breathing"),
    toKebabCase("Water Walk"),
    toKebabCase("Banishment"),
    toKebabCase("Blight"),
    toKebabCase("Confusion"),
    toKebabCase("Dimension Door"),
    toKebabCase("Dominate Beast"),
    toKebabCase("Greater Invisibility"),
    toKebabCase("Ice Storm"),
    toKebabCase("Polymorph"),
    toKebabCase("Stoneskin"),
    toKebabCase("Wall of Fire"),
    toKebabCase("Animate Objects"),
    toKebabCase("Cloudkill"),
    toKebabCase("Cone of Cold"),
    toKebabCase("Creation"),
    toKebabCase("Dominate Person"),
    toKebabCase("Hold Monster"),
    toKebabCase("Insect Plague"),
    toKebabCase("Seeming"),
    toKebabCase("Telekinesis"),
    toKebabCase("Teleportation Circle"),
    toKebabCase("Wall of Stone"),
    toKebabCase("Arcane Gate"),
    toKebabCase("Chain Lightning"),
    toKebabCase("Circle of Death"),
    toKebabCase("Disintegrate"),
    toKebabCase("Eyebite"),
    toKebabCase("Globe of Invulnerability"),
    toKebabCase("Mass Suggestion"),
    toKebabCase("Move Earth"),
    toKebabCase("Sunbeam"),
    toKebabCase("True Seeing"),
    toKebabCase("Delayed Blast Fireball"),
    toKebabCase("Etherealness"),
    toKebabCase("Finger of Death"),
    toKebabCase("Fire Storm"),
    toKebabCase("Plane Shift"),
    toKebabCase("Prismatic Spray"),
    toKebabCase("Reverse Gravity"),
    toKebabCase("Teleport"),
    toKebabCase("Dominate Monster"),
    toKebabCase("Earthquake"),
    toKebabCase("Incendiary Cloud"),
    toKebabCase("Power Word Stun"),
    toKebabCase("Sunburst"),
    toKebabCase("Gate"),
    toKebabCase("Meteor Swarm"),
    toKebabCase("Power Word Kill"),
    toKebabCase("Time Stop"),
    toKebabCase("Wish"),
    toKebabCase("Control flames"),
    toKebabCase("Create bonfire"),
    toKebabCase("Frostbite"),
    toKebabCase("Gust"),
    toKebabCase("Infestation"),
    toKebabCase("Mold earth"),
    toKebabCase("Shape water"),
    toKebabCase("Thunderclap"),
    toKebabCase("Absorb elements"),
    toKebabCase("Catapult"),
    toKebabCase("Chaos bolt"),
    toKebabCase("Earth tremor"),
    toKebabCase("Ice knife"),
    toKebabCase("Aganazzar's scorcher"),
    toKebabCase("Dragon's Breath"),
    toKebabCase("Dust devil"),
    toKebabCase("Earthbind"),
    toKebabCase("Maximilian's earthen grasp"),
    toKebabCase("Mind spike"),
    toKebabCase("Pyrotechnics"),
    toKebabCase("Shadow blade"),
    toKebabCase("Snilloc's snowball swarm"),
    toKebabCase("Warding wind"),
    toKebabCase("Catnap"),
    toKebabCase("Enemies abound"),
    toKebabCase("Erupting earth"),
    toKebabCase("Flame arrows"),
    toKebabCase("Melf's minute meteors"),
    toKebabCase("Thunder step"),
    toKebabCase("Tidal wave"),
    toKebabCase("Wall of water"),
    toKebabCase("Charm monster"),
    toKebabCase("Sickening radiance"),
    toKebabCase("Storm sphere"),
    toKebabCase("Vitriolic sphere"),
    toKebabCase("Watery sphere"),
    toKebabCase("Control winds"),
    toKebabCase("Enervation"),
    toKebabCase("Far step"),
    toKebabCase("Immolation"),
    toKebabCase("Skill empowerment"),
    toKebabCase("Synaptic static"),
    toKebabCase("Wall of light"),
    toKebabCase("Investiture of flame"),
    toKebabCase("Investiture of ice"),
    toKebabCase("Investiture of stone"),
    toKebabCase("Investiture of wind"),
    toKebabCase("Mental prison"),
    toKebabCase("Scatter"),
    toKebabCase("Crown of stars"),
    toKebabCase("Power word pain"),
    toKebabCase("Whirlwind"),
    toKebabCase("Abi-Dalzim's horrid wilting"),
    toKebabCase("Mass polymorph"),
    toKebabCase("Psychic scream"),
    toKebabCase("Silvery Barbs"),
    toKebabCase("Kinetic Jaunt"),
    toKebabCase("Vortex Warp"),
    toKebabCase("Wither and Bloom"),
  ],
  additional_spells: [
    toKebabCase("Booming blade"),
    toKebabCase("Green-flame blade"),
    toKebabCase("Lightning lure"),
    toKebabCase("Mind sliver"),
    toKebabCase("Sword burst"),
    toKebabCase("Grease"),
    toKebabCase("Tasha's caustic brew"),
    toKebabCase("Flame blade"),
    toKebabCase("Flaming sphere"),
    toKebabCase("Magic weapon"),
    toKebabCase("Tasha's mind whip"),
    toKebabCase("Intellect fortress"),
    toKebabCase("Vampiric touch"),
    toKebabCase("Fire shield"),
    toKebabCase("Bigby's hand"),
    toKebabCase("Flesh to stone"),
    toKebabCase("Otiluke's freezing sphere"),
    toKebabCase("Tasha's otherworldly guise"),
    toKebabCase("Dream of the blue veil"),
    toKebabCase("Demiplane"),
    toKebabCase("Blade of disaster"),
  ],
};

export default data;
