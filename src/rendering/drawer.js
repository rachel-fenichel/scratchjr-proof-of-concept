import * as Blockly from 'blockly';

const svgPaths = Blockly.utils.svgPaths;

export class ScratchJrDrawer extends Blockly.blockRendering.Drawer {
    constructor(block, info) {
        super(block, info);
    }

    // This is a hack--the position information should already be set in the leftSide 
    // measurable, and I should be able to just apply it instead of doing math here
    // based on block width and height.
    positionPreviousConnection_() {
        if (this.info_.hasLeftConnection) {
            this.info_.leftSide.connectionModel.setOffsetInBlock(0, this.info_.height / 2);
        }
    }

    // This is a hack--the position information should already be set in the rightSide 
    // measurable, and I should be able to just apply it instead of doing math here
    // based on block width and height.
    positionNextConnection_() {
        if (this.info_.hasRightConnection) {
            this.info_.rightSide.connectionModel.setOffsetInBlock(this.info_.width, this.info_.height / 2);
        }
    }

    drawOutline_() {
        this.drawTop_();
        this.drawRight_();
        this.drawBottom_();
        this.drawLeft_();
    }

    // This is a hack--I'm not actually iterating over rows. Instead I'm just looking at the
    // height of a single row on the block and working backwards.
    drawLeft_() {
        if (this.info_.hasLeftConnection) {
            const leftSide = this.info_.leftSide;
            const residualHeight = this.info_.rows[2].height - leftSide.shape.height;
            this.outlinePath_ += svgPaths.lineOnAxis('v', - residualHeight / 2);
            this.outlinePath_ += leftSide.shape.pathUp;
            this.outlinePath_ += svgPaths.lineOnAxis('v', -residualHeight / 2);
        }
        this.positionPreviousConnection_();
        // Close off the path.
        this.outlinePath_ += 'z';
    }

    // This is a hack--I'm not actually iterating over rows. Instead I'm just looking at the
    // height of a single row on the block and working backwards.
    drawRight_() {
        if (this.info_.hasRightConnection) {
            const rightSide = this.info_.rightSide;

            const residualHeight = this.info_.rows[2].height - rightSide.shape.height;
            this.outlinePath_ += svgPaths.lineOnAxis('v', residualHeight / 2);

            this.outlinePath_ += rightSide.shape.pathDown;
            this.outlinePath_ += svgPaths.lineOnAxis('v', residualHeight / 2);
        } else {
            this.outlinePath_ += svgPaths.lineOnAxis('v', this.info_.height);
        }
        this.positionNextConnection_();
    }
};
