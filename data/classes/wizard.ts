import { toKebabCase } from "functions/utils/toKebabCase";
import { ClassType } from "data/types";

const data: ClassType = {
  name: "Wizard",
  subclass_label: "School",
  subclasses: [],
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
    toKebabCase("Alarm"),
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
    toKebabCase("Find Familiar"),
    toKebabCase("Fog Cloud"),
    toKebabCase("Grease"),
    toKebabCase("Identify"),
    toKebabCase("Illusory Script"),
    toKebabCase("Jump"),
    toKebabCase("Longstrider"),
    toKebabCase("Mage Armor"),
    toKebabCase("Magic Missile"),
    toKebabCase("Protection from Evil and Good"),
    toKebabCase("Ray of Sickness"),
    toKebabCase("Shield"),
    toKebabCase("Silent Image"),
    toKebabCase("Sleep"),
    toKebabCase("Tasha's Hideous Laughter"),
    toKebabCase("Hideous Laughter"),
    toKebabCase("Tenser's Floating Disk"),
    toKebabCase("Floating Disk"),
    toKebabCase("Thunderwave"),
    toKebabCase("Unseen Servant"),
    toKebabCase("Witch Bolt"),
    toKebabCase("Alter Self"),
    toKebabCase("Arcane Lock"),
    toKebabCase("Blindness/Deafness"),
    toKebabCase("Blur"),
    toKebabCase("Cloud of Daggers"),
    toKebabCase("Continual Flame"),
    toKebabCase("Crown of Madness"),
    toKebabCase("Darkness"),
    toKebabCase("Darkvision"),
    toKebabCase("Detect Thoughts"),
    toKebabCase("Enlarge/Reduce"),
    toKebabCase("Flaming Sphere"),
    toKebabCase("Gentle Repose"),
    toKebabCase("Gust of Wind"),
    toKebabCase("Hold Person"),
    toKebabCase("Invisibility"),
    toKebabCase("Knock"),
    toKebabCase("Levitate"),
    toKebabCase("Locate Object"),
    toKebabCase("Magic Mouth"),
    toKebabCase("Magic Weapon"),
    toKebabCase("Melf's Acid Arrow"),
    toKebabCase("Acid Arrow"),
    toKebabCase("Mirror Image"),
    toKebabCase("Misty Step"),
    toKebabCase("Nystul's Magic Aura"),
    toKebabCase("Arcanist's Magic Aura"),
    toKebabCase("Phantasmal Force"),
    toKebabCase("Ray of Enfeeblement"),
    toKebabCase("Rope Trick"),
    toKebabCase("Scorching Ray"),
    toKebabCase("See Invisibility"),
    toKebabCase("Shatter"),
    toKebabCase("Spider Climb"),
    toKebabCase("Suggestion"),
    toKebabCase("Web"),
    toKebabCase("Animate Dead"),
    toKebabCase("Bestow Curse"),
    toKebabCase("Blink"),
    toKebabCase("Clairvoyance"),
    toKebabCase("Counterspell"),
    toKebabCase("Dispel Magic"),
    toKebabCase("Fear"),
    toKebabCase("Feign Death"),
    toKebabCase("Fireball"),
    toKebabCase("Fly"),
    toKebabCase("Gaseous Form"),
    toKebabCase("Glyph of Warding"),
    toKebabCase("Haste"),
    toKebabCase("Hypnotic Pattern"),
    toKebabCase("Leomund's Tiny Hut"),
    toKebabCase("Tiny Hut"),
    toKebabCase("Lightning Bolt"),
    toKebabCase("Magic Circle"),
    toKebabCase("Major Image"),
    toKebabCase("Nondetection"),
    toKebabCase("Phantom Steed"),
    toKebabCase("Protection from Energy"),
    toKebabCase("Remove Curse"),
    toKebabCase("Sending"),
    toKebabCase("Sleet Storm"),
    toKebabCase("Slow"),
    toKebabCase("Stinking Cloud"),
    toKebabCase("Tongues"),
    toKebabCase("Vampiric Touch"),
    toKebabCase("Water Breathing"),
    toKebabCase("Arcane Eye"),
    toKebabCase("Banishment"),
    toKebabCase("Blight"),
    toKebabCase("Confusion"),
    toKebabCase("Conjure Minor Elementals"),
    toKebabCase("Control Water"),
    toKebabCase("Dimension Door"),
    toKebabCase("Evard's Black Tentacles"),
    toKebabCase("Black Tentacles"),
    toKebabCase("Fabricate"),
    toKebabCase("Fire Shield"),
    toKebabCase("Greater Invisibility"),
    toKebabCase("Hallucinatory Terrain"),
    toKebabCase("Ice Storm"),
    toKebabCase("Leomund's Secret Chest"),
    toKebabCase("Locate Creature"),
    toKebabCase("Mordenkainen's Faithful Hound"),
    toKebabCase("Faithful Hound"),
    toKebabCase("Mordenkainen's Private Sanctum"),
    toKebabCase("Private Sanctum"),
    toKebabCase("Otiluke's Resilient Sphere"),
    toKebabCase("Resilient Sphere"),
    toKebabCase("Phantasmal Killer"),
    toKebabCase("Polymorph"),
    toKebabCase("Stone Shape"),
    toKebabCase("Stoneskin"),
    toKebabCase("Wall of Fire"),
    toKebabCase("Animate Objects"),
    toKebabCase("Bigby's Hand"),
    toKebabCase("Arcane Hand"),
    toKebabCase("Cloudkill"),
    toKebabCase("Cone of Cold"),
    toKebabCase("Conjure Elemental"),
    toKebabCase("Contact Other Plane"),
    toKebabCase("Creation"),
    toKebabCase("Dominate Person"),
    toKebabCase("Dream"),
    toKebabCase("Geas"),
    toKebabCase("Hold Monster"),
    toKebabCase("Legend Lore"),
    toKebabCase("Mislead"),
    toKebabCase("Modify Memory"),
    toKebabCase("Passwall"),
    toKebabCase("Planar Binding"),
    toKebabCase("Rary's Telepathic Bond"),
    toKebabCase("Telepathic Bond"),
    toKebabCase("Scrying"),
    toKebabCase("Seeming"),
    toKebabCase("Telekinesis"),
    toKebabCase("Teleportation Circle"),
    toKebabCase("Wall of Force"),
    toKebabCase("Wall of Stone"),
    toKebabCase("Arcane Gate"),
    toKebabCase("Chain Lightning"),
    toKebabCase("Circle of Death"),
    toKebabCase("Contingency"),
    toKebabCase("Create Undead"),
    toKebabCase("Disintegrate"),
    toKebabCase("Drawmij's Instant Summons"),
    toKebabCase("Instant Summons"),
    toKebabCase("Eyebite"),
    toKebabCase("Flesh to Stone"),
    toKebabCase("Globe of Invulnerability"),
    toKebabCase("Guards and Wards"),
    toKebabCase("Magic Jar"),
    toKebabCase("Mass Suggestion"),
    toKebabCase("Move Earth"),
    toKebabCase("Otiluke's Freezing Sphere"),
    toKebabCase("Freezing Sphere"),
    toKebabCase("Otto's Irresistible Dance"),
    toKebabCase("Programmed Illusion"),
    toKebabCase("Sunbeam"),
    toKebabCase("True Seeing"),
    toKebabCase("Wall of Ice"),
    toKebabCase("Delayed Blast Fireball"),
    toKebabCase("Etherealness"),
    toKebabCase("Finger of Death"),
    toKebabCase("Forcecage"),
    toKebabCase("Mirage Arcane"),
    toKebabCase("Mordenkainen's Magnificent Mansion"),
    toKebabCase("Magnificent Mansion"),
    toKebabCase("Mordenkainen's Sword"),
    toKebabCase("Plane Shift"),
    toKebabCase("Prismatic Spray"),
    toKebabCase("Project Image"),
    toKebabCase("Reverse Gravity"),
    toKebabCase("Sequester"),
    toKebabCase("Simulacrum"),
    toKebabCase("Symbol"),
    toKebabCase("Teleport"),
    toKebabCase("Antimagic Field"),
    toKebabCase("Antipathy/Sympathy"),
    toKebabCase("Clone"),
    toKebabCase("Control Weather"),
    toKebabCase("Demiplane"),
    toKebabCase("Dominate Monster"),
    toKebabCase("Feeblemind"),
    toKebabCase("Incendiary Cloud"),
    toKebabCase("Maze"),
    toKebabCase("Mind Blank"),
    toKebabCase("Power Word Stun"),
    toKebabCase("Sunburst"),
    toKebabCase("Telepathy"),
    toKebabCase("Astral Projection"),
    toKebabCase("Foresight"),
    toKebabCase("Gate"),
    toKebabCase("Imprisonment"),
    toKebabCase("Meteor Swarm"),
    toKebabCase("Power Word Kill"),
    toKebabCase("Prismatic Wall"),
    toKebabCase("Shapechange"),
    toKebabCase("Time Stop"),
    toKebabCase("True Polymorph"),
    toKebabCase("Weird"),
    toKebabCase("Wish"),
    toKebabCase("Control flames"),
    toKebabCase("Create bonfire"),
    toKebabCase("Frostbite"),
    toKebabCase("Gust"),
    toKebabCase("Infestation"),
    toKebabCase("Mold earth"),
    toKebabCase("Shape water"),
    toKebabCase("Thunderclap"),
    toKebabCase("Toll the dead"),
    toKebabCase("Absorb elements"),
    toKebabCase("Catapult"),
    toKebabCase("Cause fear"),
    toKebabCase("Earth tremor"),
    toKebabCase("Ice knife"),
    toKebabCase("Snare"),
    toKebabCase("Aganazzar's scorcher"),
    toKebabCase("Dragon's Breath"),
    toKebabCase("Dust devil"),
    toKebabCase("Earthbind"),
    toKebabCase("Maximilian's earthen grasp"),
    toKebabCase("Mind spike"),
    toKebabCase("Pyrotechnics"),
    toKebabCase("Shadow blade"),
    toKebabCase("Skywrite"),
    toKebabCase("Snilloc's snowball swarm"),
    toKebabCase("Warding wind"),
    toKebabCase("Catnap"),
    toKebabCase("Enemies abound"),
    toKebabCase("Erupting earth"),
    toKebabCase("Flame arrows"),
    toKebabCase("Life transference"),
    toKebabCase("Melf's minute meteors"),
    toKebabCase("Summon lesser demons"),
    toKebabCase("Thunder step"),
    toKebabCase("Tidal wave"),
    toKebabCase("Tiny servant"),
    toKebabCase("Wall of sand"),
    toKebabCase("Wall of water"),
    toKebabCase("Charm monster"),
    toKebabCase("Elemental bane"),
    toKebabCase("Sickening radiance"),
    toKebabCase("Storm sphere"),
    toKebabCase("Summon greater demon"),
    toKebabCase("Vitriolic sphere"),
    toKebabCase("Watery sphere"),
    toKebabCase("Control winds"),
    toKebabCase("Danse Macabre"),
    toKebabCase("Dawn"),
    toKebabCase("Enervation"),
    toKebabCase("Far step"),
    toKebabCase("Immolation"),
    toKebabCase("Infernal calling"),
    toKebabCase("Negative energy flood"),
    toKebabCase("Skill empowerment"),
    toKebabCase("Steel wind strike"),
    toKebabCase("Synaptic static"),
    toKebabCase("Transmute rock"),
    toKebabCase("Wall of light"),
    toKebabCase("Create homunculus"),
    toKebabCase("Investiture of flame"),
    toKebabCase("Investiture of ice"),
    toKebabCase("Investiture of stone"),
    toKebabCase("Investiture of wind"),
    toKebabCase("Mental prison"),
    toKebabCase("Scatter"),
    toKebabCase("Soul cage"),
    toKebabCase("Tenser's transformation"),
    toKebabCase("Crown of stars"),
    toKebabCase("Power word pain"),
    toKebabCase("Whirlwind"),
    toKebabCase("Abi-Dalzim's horrid wilting"),
    toKebabCase("Illusory dragon"),
    toKebabCase("Maddening darkness"),
    toKebabCase("Mighty fortress"),
    toKebabCase("Invulnerability"),
    toKebabCase("Mass polymorph"),
    toKebabCase("Psychic scream"),
    toKebabCase("Silvery Barbs"),
    toKebabCase("Borrowed Knowledge"),
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
    toKebabCase("Tasha's caustic brew"),
    toKebabCase("Augury"),
    toKebabCase("Enhance ability"),
    toKebabCase("Tasha's mind whip"),
    toKebabCase("Intellect fortress"),
    toKebabCase("Speak with dead"),
    toKebabCase("Spirit shroud"),
    toKebabCase("Summon fey"),
    toKebabCase("Summon shadowspawn"),
    toKebabCase("Summon undead"),
    toKebabCase("Divination"),
    toKebabCase("Summon aberration"),
    toKebabCase("Summon construct"),
    toKebabCase("Summon elemental"),
    toKebabCase("Summon fiend"),
    toKebabCase("Tasha's otherworldly guise"),
    toKebabCase("Dream of the blue veil"),
    toKebabCase("Blade of disaster"),
  ],
};

export default data;
