import * as Blockly from 'blockly';
import { block1Json, block2Json } from './myBlocks';

Blockly.defineBlocksWithJsonArray([block1Json, block2Json]);
var toolbox = {
    "kind": "flyoutToolbox",
    "contents": [
      {
        "kind": "block",
        "type": block1Json.type
      },
      {
        "kind": "block",
        "type": block2Json.type
      }
    ]
  };
  
const workspace = Blockly.inject('blocklyDiv', {
    toolbox: toolbox,
    renderer: 'zelos',
    trashcan: 'true'
});
