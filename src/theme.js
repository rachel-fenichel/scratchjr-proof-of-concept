import * as Blockly from 'blockly';

const demoTheme = Blockly.Theme.defineTheme('demoTheme', {
    'base': Blockly.Themes.Modern,
    'categoryStyles': {
        'movement_category': {
            'colour': '#1edffc'
        },
        'other_category': {
            'colour': '#e01fdd'
        }
    },
    'blockStyles': {
        'movement_blocks': {
            'colourPrimary': '#1edffc',
            'colourSecondary': '#1f2fe0',
            'colourTertiary': '#1f2fe0'
        }
    },
    'componentStyles': {

    }
});


export { demoTheme }
