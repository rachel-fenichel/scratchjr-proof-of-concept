import * as Blockly from 'blockly';
import { defsArray, blockTypes } from './blocks/myBlocks';
import {toolbox} from './blocks/toolbox';

Blockly.defineBlocksWithJsonArray(defsArray);
  
const workspace = Blockly.inject('blocklyDiv', {
    toolbox: toolbox,
    renderer: 'zelos',
    horizontalLayout: 'true'
});
