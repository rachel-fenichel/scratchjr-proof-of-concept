import * as Blockly from 'blockly';

const svgPaths = Blockly.utils.svgPaths;

export class ScratchJrDrawer extends Blockly.blockRendering.Drawer {
    constructor(block, info) {
        super(block, info);
    }

    positionPreviousConnection_() {
        if (this.info_.hasLeftConnection) {
            this.info_.leftSide.connectionModel.setOffsetInBlock(0, this.info_.height / 2);
        }
    }

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
