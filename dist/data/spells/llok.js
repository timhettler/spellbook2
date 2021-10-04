"use strict";
exports.__esModule = true;
var const_1 = require("../const");
var data = {
    meta: {
        name: 'Lost Labratory of Kwalish',
        abbreviation: 'llok'
    },
    spells: [
        {
            name: 'Flock of Familiars',
            desc: "You temporarily summon three familiars \u2014 spirits that take animal forms of your choice. Each familiar uses the same rules and options for a familiar conjured by the <i>find familiar</i> spell. All the familiars conjured by this spell must be the same type of creature (celestials, fey, or fiends; your choice). If you already have a familiar conjured by the find familiar spell or similar means, then one fewer familiars are conjured by this spell.\n\nFamiliars summoned by this spell can telepathically communicate with you and share their visual or auditory senses while they are within 1 mile of you.\n\nWhen you cast a spell with a range of touch, one of the familiars conjured by this spell can deliver the spell, as normal. However, you can cast a touch spell through only one familiar per turn.",
            higher_level: 'When you cast this spell using a spell slot of 3rd level or higher, you conjure an additional familiar for each slot level above 2nd.',
            page: null,
            range: 'touch',
            components: ['V', 'S'],
            ritual: false,
            duration: '1 hour',
            concentration: true,
            casting_time: '1 minute',
            level: 2,
            school: const_1.SCHOOL.CONJURATION,
            attack_save: null,
            damage_effect: [const_1.DAMAGE_EFFECT.SUMMONING]
        },
        {
            name: "Galder's Tower",
            desc: "You conjure a two-story tower made of stone, wood, or similar suitably sturdy materials. The tower can be round or square in shape. Each level of the tower is 10 feet tall and has an area of up to 100 square feet. Access between levels consists of a simple ladder and hatch. Each level takes one of the following forms, chosen by you when you cast the spell:\n\n* A bedroom with a bed, chairs, chest, and magical fireplace\n* A study with desks, books, bookshelves, parchments, ink, and ink pens\n* A dining space with a table, chairs, magical fireplace, containers, and cooking utensils\n* A lounge with couches, armchairs, side tables and footstools\n* A washroom with toilets, washtubs, a magical brazier, and sauna benches\n* An observatory with a telescope and maps of the night sky\n* An unfurnished, empty room\n\nThe interior of the tower is warm and dry, regardless of conditions outside. Any equipment or furnishings conjured with the tower dissipate into smoke if removed from it. At the end of the spell's duration, all creatures and objects within the tower that were not created by the spell appear safely outside on the ground, and all traces of the tower and its furnishings disappear.\n\nYou can cast this spell again while it is active to maintain the tower's existence for another 24 hours. You can create a permanent tower by casting this spell in the same location and with the same configuration every day for one year.",
            higher_levels: 'When you cast this spell using a spell slot of 4th level or higher, the tower can have one additional story for each slot level beyond 3rd.',
            page: null,
            range: '30 feet',
            components: ['V', 'S', 'M'],
            material: 'a fragment of stone, wood, or other building material',
            ritual: false,
            duration: '24 hours',
            concentration: false,
            casting_time: '10 minutes',
            level: 3,
            school: const_1.SCHOOL.CONJURATION,
            attack_save: null,
            damage_effect: [const_1.DAMAGE_EFFECT.UTILITY]
        },
        {
            name: "Galder's Speedy Courier",
            desc: "You summon a Small air elemental to a spot within range. The air elemental is formless, nearly transparent, immune to all damage, and cannot interact with other creatures or objects. It carries an open, empty chest whose interior dimensions are 3 feet on each side. While the spell lasts, you can deposit as many items inside the chest as will fit. You can then name a living creature you have met and seen at least once before, or any creature for which you possess a body part, lock of hair, clipping from a nail, or similar portion of the creature's body.\n\nAs soon as the lid of the chest is closed, the elemental and the chest disappear, then reappear adjacent to the target creature. If the target creature is on another plane, or if it is proofed against magical detection or location, the contents of the chest reappear on the ground at your feet.\n\nThe target creature is made aware of the chest's contents before it chooses whether or not to open it, and knows how much of the spell's duration remains in which it can retrieve them. No other creature can open the chest and retrieve its contents. When the spell expires or when all the contents of the chest have been removed, the elemental and the chest disappear. The elemental also disappears if the target creature orders it to return the items to you. When the elemental disappears, any items not taken from the chest reappear on the ground at your feet.",
            higher_level: 'When you cast this spell using an 8th-level spell slot, you can send the chest to a creature on a different plane of existence from you.',
            page: null,
            range: '10 feet',
            components: ['V', 'S', 'M'],
            material: '25 gold pieces, or mineral goods of equivalent value, which the spell consumes',
            ritual: false,
            duration: '10 minutes',
            concentration: false,
            casting_time: '1 action',
            level: 4,
            school: const_1.SCHOOL.CONJURATION,
            attack_save: null,
            damage_effect: [const_1.DAMAGE_EFFECT.COMMUNICATION, const_1.DAMAGE_EFFECT.UTILITY]
        },
    ]
};
exports["default"] = data;
//# sourceMappingURL=llok.js.map