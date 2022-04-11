import * as Blockly from 'blockly';
import { ScratchJrFlyout } from './flyout';
import { CustomCategory } from './custom_category';

/**
 * This file defines the category menu. In particular, it
 * makes the category menu a fixed width and height, and opens
 * the flyout immediately.
 * It also sets the flyout's background colour to match the
 * currently selected category.
 */

const getCategoryName = function(item) {
    const category = /** @type {CustomCategory} */(item);
    return category ? category.getName() : '';
}

const WIDTH = 200;
const HEIGHT = 80;

export class ScratchJrToolbox extends Blockly.Toolbox {
    /** @override */
    constructor(workspace) {
        super(workspace);
    }

    /** @override */
    init() {
        super.init();
        // Populate and open the flyout immediately.
        const content = this.contents_[0]
        this.getFlyout().show(content.flyoutItems_);
        this.selectItem_(null, content);
        this.updateFlyout_(null, content);
    }
    
    /** @override */
    getFlyout() {
        return /** @type {ScratchJrFlyout} */ (super.getFlyout());
    }

    /** @override */
    updateFlyout_(oldItem, newItem) {
        super.updateFlyout_(oldItem, newItem);
        // Set the colour.
        const flyout = this.getFlyout();
        flyout.changeBackground(getCategoryName(oldItem), getCategoryName(newItem));
    }

   /** @override */
  position() {
    const toolboxDiv = this.HtmlDiv;
    if (!toolboxDiv) {
      // Not initialized yet.
      return;
    }

    // Fixed width and height.
    toolboxDiv.style.left = '0';
    toolboxDiv.style.height = HEIGHT + 'px';
    toolboxDiv.style.width = WIDTH + 'px';
    this.height_ = HEIGHT;
    this.width_ = WIDTH;
    toolboxDiv.style.top = '0';
    this.flyout_.position();
  }
}