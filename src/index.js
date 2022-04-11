import * as Blockly from 'blockly';
import { defineBlocks } from './blocks/myBlocks';
import { toolbox } from './blocks/toolbox';
import { demoTheme } from './theme';
import { ScratchJrToolbox } from './palette/toolbox';
import { ScratchJrRenderer } from './rendering/renderer';
import './palette/custom_category'
import './style.css'
import { ScratchJrFlyout } from './palette/flyout';

/** 
 * The entry point for the Scratch Jr-Blockly demo.
 * This file imports all of the custom code, defines the
 * blocks for the demo, and configures a Blockly workspace.
 */

defineBlocks();

// The plugins section of the configuration struct. Broken 
// out for readability.
const plugins = {
    'toolbox': ScratchJrToolbox,
    'flyoutsHorizontalToolbox': ScratchJrFlyout
}

// The moveOptions section of the configuration struct. Broken
// out for readability.
const moveOptions = {
    scrollbars: {
        horizontal: true,
        vertical: false
    },
    drag: true,
    wheel: false
};

const workspace = Blockly.inject('blocklyDiv', {
    toolbox: toolbox,
    horizontalLayout: 'true',
    theme: demoTheme,
    plugins: plugins,
    move: moveOptions,
    trashcan: false,
    renderer: 'scratch_jr_renderer'
});
