import * as Blockly from 'blockly';

/**
 * Block definitions, grouped into categories based on where they
 * belong in the toolbox. Each category has a name and a list of
 * blocks.
 */
const categories = [
    {
        name: "movement",
        blocks: [
            {
                type: "forward",
                image: "arrow_forward",
                previous: true,
                next: true
            },
            {
                type: "back",
                image: "arrow_back",
                previous: true,
                next: true
            },
            {
                type: "left",
                image: "arrow_left",
                previous: true,
                next: true
            },
            {
                type: "right",
                image: "arrow_right",
                previous: true,
                next: true
            }
        ]
    },
    {
        name: "events",
        blocks: [
            {
                type: "start",
                image: "flag",
                previous: false,
                next: true
            },
            {
                type: "tap",
                image: "touch_app",
                previous: false,
                next: true
            },
            {
                type: "open",
                image: "drafts",
                previous: true,
                next: true
            },
            {
                type: "send",
                image: "forward_to_inbox",
                previous: false,
                next: true
            }
        ]
    },
    {
        name: "looks",
        blocks: [

            {
                type: "say",
                image: "chat_bubble",
                previous: true,
                next: true
            },

            {
                type: "hide",
                image: "directions_run",
                previous: true,
                next: true
            },

            {
                type: "show",
                image: "emoji_people",
                previous: true,
                next: true
            }
        ]
    }
];

/**
 * Make a blockly-compatible JSON block definition from a shorthand
 * local description. 
 * @param {*} descriptor An object containing a type string, an icon name,
 *     and booleans for whether there are previous and next connections.
 * @param {string} category
 * @returns 
 */
function makeDef(descriptor, category) {
    const def = {
        "type": descriptor.type,
        "message0": '%1',
        "args0": [
            {
                "type": "field_image",
                "src": `https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/${descriptor.image}/default/24px.svg`,
                "width": 40,
                "height": 40,
                "alt": `${descriptor.type} icon`
            }
        ],
        "style": category + "_blocks"
    };

    if (descriptor.previous) {
        def["previousStatement"] = null;
    }
    if (descriptor.next) {
        def["nextStatement"] = null;
    }
    return def;
}

/**
 * Build a simplified map that just has category names
 * and lists of block types, which toolbox.js uses to
 * generate toolbox JSON.
 */
const blockTypes = categories.map(item => {
    return {
        category: item.name,
        types: item.blocks.map(blockDef => {
            return blockDef.type
        })
    }
})

const defineBlocks = function () {
    // Make a single array of block definitions by iterating over
    // all of the categories, and over all of the block types in 
    // the categories, and building a definition for each block.
    const defsArray = categories.map(category => {
        return category.blocks.map(blockDef => {
            return makeDef(blockDef, category.name)
        });
    }).flat();
    
    // Tell Blockly about the definitions.
    Blockly.defineBlocksWithJsonArray(defsArray);
}

export { blockTypes, defineBlocks };