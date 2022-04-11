import * as Blockly from 'blockly';

const demoTheme = Blockly.Theme.defineTheme('demoTheme', {
    'base': Blockly.Themes.Modern,
    'categoryStyles': {
        'movement_category': {
            'colour': '#1edffc'
        },
        'events_category': {
            'colour': '#fae120'
        }
    },
    'blockStyles': {
        'movement_blocks': {
            'colourPrimary': '#1edffc',
            'colourSecondary': '#1f2fe0',
            'colourTertiary': '#1f2fe0'
        },
        'events_blocks': {
            'colourPrimary': '#fae120',
        }
    },
    'componentStyles': {

    }
});


export { demoTheme }
