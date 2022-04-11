import { blockTypes } from './myBlocks';

let contentsArr = blockTypes.map(item => { return { "kind": "block", "type": item } })

var toolbox = {
  "kind": "categoryToolbox",
  "contents":
    [
      {
        "kind": "category",
        "name": "Movement",
        "contents": contentsArr.slice(0, 4),
        "categorystyle": "movement_category",
        "cssConfig": {
          "icon": "customIcon"
        },
        "baseIcon": "arrow_forward",
        "selectedIcon": "arrow_back"
      },
      {
        "kind": "category",
        "name": "Events",
        "contents": contentsArr.slice(4),
        "categorystyle": "events_category",
        "cssConfig": {
          "icon": "event"
        },
        "baseIcon": "flag",
        "selectedIcon": "upcoming"
      }
    ],
};

export { toolbox };