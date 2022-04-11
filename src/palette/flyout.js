import * as Blockly from 'blockly';

const TOOLBOX_WIDTH = 200;
export class ScratchJrFlyout extends Blockly.HorizontalFlyout {
    /** @override */
    constructor(workspaceOptions) {
        super(workspaceOptions);
        this.autoClose = false;
    }
    
    // Set the background color of the flyout. Used by toolbox.js.
    changeBackground(oldBg, newBg) {
        Blockly.utils.dom.removeClass(this.svgBackground_, oldBg);
        Blockly.utils.dom.addClass(this.svgBackground_, newBg);
    }

    // Position the flyout at the top of the screen.
    getY() {
        return 0;
    }

    // Position the flyout to the right of the toolbox.
    getX() {
        return TOOLBOX_WIDTH;
    }
}