import * as Blockly from 'blockly';

const svgPaths = Blockly.utils.svgPaths;

export class ScratchJrConstantsProvider extends Blockly.blockRendering.ConstantProvider {
    constructor() {
        // Set up all of the constants from the base provider.
        super();

        // Override a few properties.
        this.CORNER_RADIUS = 6;

        this.BLOCK_HEIGHT = 50;

        this.TAB_HEIGHT = 30;
    }

    /**
     * @override
     */
    shapeFor(connection) {
        const checks = connection.getCheck();
        switch (connection.type) {
            case Blockly.PREVIOUS_STATEMENT:
            case Blockly.NEXT_STATEMENT:
                return this.PUZZLE_TAB;
            default:
                throw Error('Unknown type');
        }
    }

    /**
     * /Override the puzzle tab dfeinition to make it point into the block
     * from the left (opposite of Blockly puzzle tabs).
     * @return {!Object} An object containing sizing and path information about
     *     puzzle tabs.
     * @override
     */
    makePuzzleTab() {
        const width = this.TAB_WIDTH;
        const height = this.TAB_HEIGHT;

        /**
         * Make the main path for the puzzle tab made out of a few curves (c and s).
         * Those curves are defined with relative positions.  The 'up' and 'down'
         * versions of the paths are the same, but the Y sign flips.  Forward and
         * back are the signs to use to move the cursor in the direction that the
         * path is being drawn.
         * @param {boolean} up True if the path should be drawn from bottom to top,
         *     false otherwise.
         * @return {string} A path fragment describing a puzzle tab.
         */
        function makeMainPath(up) {
            const forward = up ? -1 : 1;
            const back = -forward;

            const overlap = 2.5;
            const halfHeight = height / 2;
            const control1Y = halfHeight + overlap;
            const control2Y = halfHeight + 0.5;
            const control3Y = overlap;  // 2.5

            const endPoint1 = svgPaths.point(width, forward * halfHeight);
            const endPoint2 = svgPaths.point(-width, forward * halfHeight);

            return svgPaths.curve(
                'c',
                [
                    svgPaths.point(0, forward * control1Y),
                    svgPaths.point(width, back * control2Y),
                    endPoint1,
                ]) +
                svgPaths.curve(
                    's', [svgPaths.point(-width, back * control3Y), endPoint2]);
        }
        const pathUp = makeMainPath(true);
        const pathDown = makeMainPath(false);

        return {
            type: this.SHAPES.PUZZLE,
            width: width,
            height: height,
            pathDown: pathDown,
            pathUp: pathUp,
        };
    }
};
