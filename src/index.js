import * as Blockly from 'blockly';
import { defsArray, blockTypes } from './blocks/myBlocks';
import { toolbox } from './blocks/toolbox';
import { demoTheme } from './theme';
import { ScratchJrToolbox } from './palette/toolbox';
import './palette/custom_category'
import './style.css'
import { ScratchJrFlyout } from './palette/flyout';

Blockly.defineBlocksWithJsonArray(defsArray);

const plugins = {
    'toolbox': ScratchJrToolbox,
    'flyoutsHorizontalToolbox': ScratchJrFlyout
}

const moveOptions = {
    scrollbars: {
        horizontal: false,
        vertical: true
    },
    drag: true,
    wheel: false
};

const workspace = Blockly.inject('blocklyDiv', {
    toolbox: toolbox,
    renderer: 'zelos',
    horizontalLayout: 'true',
    theme: demoTheme,
    plugins: plugins,
    move: moveOptions,
    trashcan: false
});
