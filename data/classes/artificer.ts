import { toKebabCase } from "@src/utils";
import { ClassType } from "@data/types";

const data: ClassType = {
  name: "Artificer",
  subclass_label: "Specialty",
  subclasses: [
    {
      name: "Alchemist",
      spell_list: [
        toKebabCase("healing word"),
        toKebabCase("ray of sickness"),
        toKebabCase("flaming sphere"),
        toKebabCase("Melf's acid arrow"),
        toKebabCase("gaseous form"),
        toKebabCase("mass healing word"),
        toKebabCase("blight"),
        toKebabCase("death ward"),
        toKebabCase("cloudkill"),
        toKebabCase("raise dead"),
      ],
    },
    {
      name: "Armorer",
      spell_list: [
        toKebabCase("magic missile"),
        toKebabCase("thunderwave"),
        toKebabCase("mirror image"),
        toKebabCase("shatter"),
        toKebabCase("hypnotic pattern"),
        toKebabCase("lightning bolt"),
        toKebabCase("fire shield"),
        toKebabCase("greater invisibility"),
        toKebabCase("passwall"),
        toKebabCase("wall of force"),
      ],
    },
    {
      name: "Artillerist",
      spell_list: [
        toKebabCase("shield"),
        toKebabCase("thunderwave"),
        toKebabCase("scorching ray"),
        toKebabCase("shatter"),
        toKebabCase("fireball"),
        toKebabCase("wind wall"),
        toKebabCase("ice storm"),
        toKebabCase("wall of fire"),
        toKebabCase("cone of cold"),
        toKebabCase("wall of force"),
      ],
    },
    {
      name: "Battle Smith",
      spell_list: [
        toKebabCase("heroism"),
        toKebabCase("shield"),
        toKebabCase("branding smite"),
        toKebabCase("warding bond"),
        toKebabCase("aura of vitality"),
        toKebabCase("conjure barrage"),
        toKebabCase("aura of purity"),
        toKebabCase("fire shield"),
        toKebabCase("banishing smite"),
        toKebabCase("mass cure wounds"),
      ],
    },
  ],
  spell_list: [
    toKebabCase("Acid splash"),
    toKebabCase("Booming blade"),
    toKebabCase("Create bonfire"),
    toKebabCase("Dancing lights"),
    toKebabCase("Fire bolt"),
    toKebabCase("Frostbite"),
    toKebabCase("Green-flame blade"),
    toKebabCase("Guidance"),
    toKebabCase("Light"),
    toKebabCase("Lightning lure"),
    toKebabCase("Mage hand"),
    toKebabCase("Magic stone"),
    toKebabCase("Mending"),
    toKebabCase("Message"),
    toKebabCase("Poison spray"),
    toKebabCase("Prestidigitation"),
    toKebabCase("Ray of frost"),
    toKebabCase("Resistance"),
    toKebabCase("Shocking grasp"),
    toKebabCase("Spare the dying"),
    toKebabCase("Sword burst"),
    toKebabCase("Thorn whip"),
    toKebabCase("Thunderclap"),
    toKebabCase("Absorb elements"),
    toKebabCase("Alarm"),
    toKebabCase("Catapult"),
    toKebabCase("Cure wounds"),
    toKebabCase("Detect magic"),
    toKebabCase("Disguise self"),
    toKebabCase("Expeditious retreat"),
    toKebabCase("Faerie fire"),
    toKebabCase("False life"),
    toKebabCase("Feather fall"),
    toKebabCase("Grease"),
    toKebabCase("Identify"),
    toKebabCase("Jump"),
    toKebabCase("Longstrider"),
    toKebabCase("Purify food and drink"),
    toKebabCase("Sanctuary"),
    toKebabCase("Snare"),
    toKebabCase("Tasha's caustic brew"),
    toKebabCase("Aid"),
    toKebabCase("Alter self"),
    toKebabCase("Arcane lock"),
    toKebabCase("Blur"),
    toKebabCase("Continual flame"),
    toKebabCase("Darkvision"),
    toKebabCase("Enhance ability"),
    toKebabCase("Enlarge/Reduce"),
    toKebabCase("Heat metal"),
    toKebabCase("Invisibility"),
    toKebabCase("Lesser restoration"),
    toKebabCase("Levitate"),
    toKebabCase("Magic mouth"),
    toKebabCase("Magic weapon"),
    toKebabCase("Protection from poison"),
    toKebabCase("Pyrotechnics"),
    toKebabCase("Rope trick"),
    toKebabCase("See invisibility"),
    toKebabCase("Skywrite"),
    toKebabCase("Spider climb"),
    toKebabCase("Web"),
    toKebabCase("Blink"),
    toKebabCase("Catnap"),
    toKebabCase("Create food and water"),
    toKebabCase("Dispel magic"),
    toKebabCase("Elemental weapon"),
    toKebabCase("Flame arrows"),
    toKebabCase("Fly"),
    toKebabCase("Glyph of warding"),
    toKebabCase("Haste"),
    toKebabCase("Intellect fortress"),
    toKebabCase("Protection from energy"),
    toKebabCase("Revivify"),
    toKebabCase("Tiny servant"),
    toKebabCase("Water breathing"),
    toKebabCase("Water walk"),
    toKebabCase("Arcane eye"),
    toKebabCase("Elemental bane"),
    toKebabCase("Fabricate"),
    toKebabCase("Freedom of movement"),
    toKebabCase("Leomund's secret chest"),
    toKebabCase("Mordenkainen's faithful hound"),
    toKebabCase("Mordenkainen's private sanctum"),
    toKebabCase("Otiluke's resilient sphere"),
    toKebabCase("Stone shape"),
    toKebabCase("Stoneskin"),
    toKebabCase("Summon construct"),
    toKebabCase("Animate objects"),
    toKebabCase("Bigby's hand"),
    toKebabCase("Creation"),
    toKebabCase("Greater restoration"),
    toKebabCase("Skill empowerment"),
    toKebabCase("Transmute rock"),
    toKebabCase("Wall of stone"),
    toKebabCase("Kinetic Jaunt"),
    toKebabCase("vortex warp"),
  ],
};

export default data;
