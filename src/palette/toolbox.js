import * as Blockly from 'blockly';
import { ScratchJrFlyout } from './flyout';
import { CustomCategory } from './custom_category';

const getCategoryName = function(item) {
    const category = /** @type {CustomCategory} */(item);
    return category ? category.getName() : '';
}
export class ScratchJrToolbox extends Blockly.Toolbox {
    /** @override */
    constructor(workspace) {
        super(workspace);
    }

    /** @override */
    init() {
        super.init();
    }

    /** @override */
    getFlyout() {
        return /** @type {ScratchJrFlyout} */ (super.getFlyout());
    }

    /** @override */
    updateFlyout_(oldItem, newItem) {
        super.updateFlyout_(oldItem, newItem);
        const flyout = this.getFlyout();
        flyout.changeBackground(getCategoryName(oldItem), getCategoryName(newItem));
    }
}