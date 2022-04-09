import * as Blockly from 'blockly';
import { defsArray, blockTypes } from './blocks/myBlocks';
import {toolbox} from './blocks/toolbox';
import { demoTheme } from './theme';
import './palette/custom_category'
import './style.css'

Blockly.defineBlocksWithJsonArray(defsArray);
  
const workspace = Blockly.inject('blocklyDiv', {
    toolbox: toolbox,
    renderer: 'zelos',
    horizontalLayout: 'true',
    theme: demoTheme
});
