import * as Blockly from 'blockly';

const TOOLBOX_WIDTH = 200;
export class ScratchJrFlyout extends Blockly.HorizontalFlyout {
    /** @override */
    constructor(workspaceOptions) {
        super(workspaceOptions);
        this.autoClose = false;
    }
    changeBackground(oldBg, newBg) {
        Blockly.utils.dom.removeClass(this.svgBackground_, oldBg);
        Blockly.utils.dom.addClass(this.svgBackground_, newBg);
    }

    getY() {
        return 0;
    }
    getX() {
        return TOOLBOX_WIDTH;
    }
}