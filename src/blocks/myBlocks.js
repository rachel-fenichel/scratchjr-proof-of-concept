const blockDescriptors = [
    {
        type: "forward",
        image: "arrow_forward",
        previous: true,
        next: true,
        category: 'movement'
    },
    {
        type: "back",
        image: "arrow_back",
        previous: true,
        next: true,
        category: 'movement'
    },
    {
        type: "left",
        image: "arrow_left",
        previous: true,
        next: true,
        category: 'movement'
    },
    {
        type: "right",
        image: "arrow_right",
        previous: true,
        next: true,
        category: 'movement'
    },
    {
        type: "start",
        image: "flag",
        previous: false,
        next: true,
        category: 'events'
    },
    {
        type: "tap",
        image: "touch_app",
        previous: false,
        next: true,
        category: 'events'
    },
    {
        type: "open",
        image: "drafts",
        previous: true,
        next: true,
        category: 'events'
    },
    {
        type: "send",
        image: "forward_to_inbox",
        previous: false,
        next: true,
        category: 'events'
    }
];

function makeDef(descriptor) {
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
        "style": descriptor.category + "_blocks"
    };

    if (descriptor.previous) {
        def["previousStatement"] = null;
    }
    if (descriptor.next) {
        def["nextStatement"] = null;
    }
    return def;
}

const blockTypes = blockDescriptors.map(item => {return item.type});
const defsArray = blockDescriptors.map(item => {return makeDef(item)});

export { defsArray, blockTypes };