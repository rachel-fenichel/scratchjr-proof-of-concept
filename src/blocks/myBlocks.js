const blockDescriptors = [
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
        previous: false,  // Test no prev
        next: true
    },
    {
        type: "right",
        image: "arrow_right",
        previous: true,
        next: false // Test no next
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
                "width": 50,
                "height": 50,
                "alt": `${descriptor.type} arrow icon`
            }
        ],
        "colour": 100
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