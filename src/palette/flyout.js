import * as Blockly from 'blockly';

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
}