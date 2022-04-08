import { blockTypes } from './myBlocks';

let contentsArr = blockTypes.map(item => { return { "kind": "block", "type": item } })

var toolbox = {
  "kind": "categoryToolbox",
  "contents":
    [
      {
        "kind": "category",
        "name": "Movement",
        "contents": contentsArr
      },
      {
        "kind": "category",
        "name": "Other",
        "contents": Array.from(contentsArr).reverse()
      }
    ],
};

export { toolbox };