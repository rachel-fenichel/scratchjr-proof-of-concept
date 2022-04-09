import { blockTypes } from './myBlocks';

let contentsArr = blockTypes.map(item => { return { "kind": "block", "type": item } })

var toolbox = {
  "kind": "categoryToolbox",
  "contents":
    [
      {
        "kind": "category",
        "name": "Movement",
        "contents": contentsArr,
        "categorystyle": "movement_category",
        "cssConfig": {
          "icon": "customIcon"
        },
        "baseIcon": "home",
        "selectedIcon": "public"
      },
      {
        "kind": "category",
        "name": "Other",
        "contents": Array.from(contentsArr).reverse(),
        "categorystyle": "other_category",
        "cssConfig": {
          "icon": "customIcon"
        },
        "baseIcon": "arrow_forward",
        "selectedIcon": "arrow_back"
      }
    ],
};

export { toolbox };