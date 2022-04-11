import { blockTypes } from './myBlocks';

// Make a map from category names to lists of category contents,
// as defined by the toolbox JSON spec.
let contentsArr = blockTypes.map(category => {
   return category.types.map(item => {
     return { "kind": "block", "type": item }
    })
  });

// The toolbox definition in JSON.
var toolbox = {
  "kind": "categoryToolbox",
  "contents":
    [
      {
        "kind": "category",
        "name": "Movement",
        "contents": contentsArr[0],
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
        "contents": contentsArr[1],
        "categorystyle": "events_category",
        "cssConfig": {
          "icon": "event"
        },
        "baseIcon": "flag",
        "selectedIcon": "upcoming"
      },
      {
        "kind": "category",
        "name": "Looks",
        "contents": contentsArr[2],
        "categorystyle": "looks_category",
        "cssConfig": {
          "icon": "look"
        },
        "baseIcon": "person",
        "selectedIcon": "face"
      }
    ],
};

export { toolbox };