import * as Blockly from 'blockly';
import { ScratchJrConstantsProvider } from './constantsProvider';
import { ScratchJrDrawer } from './drawer';
import { ScratchJrRenderInfo } from './info';

export class ScratchJrRenderer extends Blockly.blockRendering.Renderer {
    constructor(name) {
        super(name);
    }

    /**
     * @override
     */
    makeConstants_() {
        return new ScratchJrConstantsProvider();
    }

    /** @override */
    makeRenderInfo_(block) {
        return new ScratchJrRenderInfo(this, block);
    }

    /** @override */
    makeDrawer_(block, info) {
        return new ScratchJrDrawer(block, /** @type {!ScratchJrRenderInfo} */(info));
    }
};

Blockly.blockRendering.register('scratch_jr_renderer', ScratchJrRenderer);