import * as Blockly from 'blockly';

class StackConnection extends Blockly.blockRendering.Connection {
    constructor(constants, connectionModel) {
        super(constants, connectionModel);
        this.height = this.shape.height;
        this.width = this.shape.width;
    }
}

class RoundSide extends Blockly.blockRendering.Measurable {
    constructor(constants) {
        super(constants);
        this.height = constants.BLOCK_HEIGHT;
        this.width = constants.BLOCK_HEIGHT / 2;
    }
}

export class ScratchJrRenderInfo extends Blockly.blockRendering.RenderInfo {
    constructor(renderer, block) {
        super(renderer, block);

        this.hasLeftConnection = !!this.block_.previousConnection && !this.outputConnection;
        this.leftSide = this.hasLeftConnection ? new StackConnection(this.constants_, this.block_.previousConnection) :
            new RoundSide(this.constants_);

        this.hasRightConnection = !!this.block_.nextConnection;
        this.rightSide = this.hasRightConnection ? new StackConnection(this.constants_, this.block_.nextConnection) :
            new RoundSide(this.constants_);
    }

    populateTopRow_() {
        this.topRow.elements.push(new Blockly.blockRendering.RoundCorner(this.constants_));
        this.topRow.elements.push(new Blockly.blockRendering.RoundCorner(this.constants_, 'right'));
    }

    populateBottomRow_() {
        this.bottomRow.elements.push(new Blockly.blockRendering.RoundCorner(this.constants_));
        this.bottomRow.elements.push(new Blockly.blockRendering.RoundCorner(this.constants_, 'right'));
    }
};
