import * as Blockly from 'blockly';

const demoTheme = Blockly.Theme.defineTheme('demoTheme', {
    'base': Blockly.Themes.Modern,
    // Toolbox categories.
    'categoryStyles': {
        'movement_category': {
            'colour': '#1edffc'
        },
        'events_category': {
            'colour': '#fae120'
        },
        'looks_category': {
            'colour': '#da4bfa'
        }
    },
    // Block styles.
    'blockStyles': {
        'movement_blocks': {
            'colourPrimary': '#1edffc',
            'colourSecondary': '#1f2fe0',
            'colourTertiary': '#1f2fe0'
        },
        'events_blocks': {
            'colourPrimary': '#fae120',
            'colourSecondary': '#0da85b',
            'colourTertiary': '#f2a024'
        },
        'looks_blocks': {
            'colourPrimary': '#da4bfa',
            'colourSecondary': '#640373',
            'colourTertiary': '#640373'
        }
    },
    'componentStyles': {
    }
});


export { demoTheme }
