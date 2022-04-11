import * as Blockly from 'blockly';
import { defsArray, blockTypes } from './blocks/myBlocks';
import { toolbox } from './blocks/toolbox';
import { demoTheme } from './theme';
import { ScratchJrToolbox } from './palette/toolbox';
import { ScratchJrRenderer } from './rendering/renderer';
import './palette/custom_category'
import './style.css'
import { ScratchJrFlyout } from './palette/flyout';
import {ContinuousMetrics} from './palette/metrics';

Blockly.defineBlocksWithJsonArray(defsArray);

const plugins = {
    'toolbox': ScratchJrToolbox,
    'flyoutsHorizontalToolbox': ScratchJrFlyout,
    'metricsManager': ContinuousMetrics,
}

const moveOptions = {
    scrollbars: {
        horizontal: true,
        vertical: false
    },
    drag: true,
    wheel: false
};

const workspace = Blockly.inject('blocklyDiv', {
    toolbox: toolbox,
    horizontalLayout: 'true',
    theme: demoTheme,
    plugins: plugins,
    move: moveOptions,
    trashcan: false,
    renderer: 'scratch_jr_renderer'
});
