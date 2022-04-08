import { defsArray, blockTypes } from './myBlocks';

let contentsArr = blockTypes.map(item => {return {"kind": "block", "type": item}})

var toolbox = {
  "kind": "flyoutToolbox",
  "contents": contentsArr
  
  
  // [
  //   {
  //     "kind": "block",
  //     "type": block1Json.type
  //   },
  //   {
  //     "kind": "block",
  //     "type": block2Json.type
  //   }
  // ]
};

export { toolbox };