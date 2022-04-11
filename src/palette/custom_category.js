import * as Blockly from 'blockly'

/**
 * This file sets the appearance of the category icons in the category menu.
 * It overrides the base definition and gets rid of the label. In it's place 
 * there is a single icon. Each category has an icon to show normally, an
 * icon to show when selected, and a category name.
 * The category name corresponds to a categorystyle in theme.js.
 */

const iconSrcStrPrefix = "https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/";
const iconSrcStrSuffix = "/default/24px.svg"

export class CustomCategory extends Blockly.ToolboxCategory {
    /**
     * Constructor for a custom category.
     * @override
     */
    constructor(categoryDef, toolbox, opt_parent) {
        super(categoryDef, toolbox, opt_parent);

        /** @type {string} */
        this.baseIcon_ = categoryDef['baseIcon'];
        /** @type {string} */
        this.selectedIcon_ = categoryDef['selectedIcon'];
        /** @type {string} */
        this.categoryName_ = categoryDef['name']
    }

    /** @override */
    createDom_() {
        this.htmlDiv_ = this.createContainer_();
        Blockly.utils.aria.setRole(this.htmlDiv_, Blockly.utils.aria.Role.TREEITEM);
        Blockly.utils.aria.setState(
            /** @type {!HTMLDivElement} */ (this.htmlDiv_), Blockly.utils.aria.State.SELECTED,
            false);
            Blockly.utils.aria.setState(
            /** @type {!HTMLDivElement} */ (this.htmlDiv_), Blockly.utils.aria.State.LEVEL,
            this.level_);
    
        this.rowDiv_ = this.createRowContainer_();
        this.rowDiv_.style.pointerEvents = 'auto';
        this.htmlDiv_.appendChild(this.rowDiv_);
    
        this.rowContents_ = this.createRowContentsContainer_();
        this.rowContents_.style.pointerEvents = 'none';
        this.rowDiv_.appendChild(this.rowContents_);
    
        this.iconDom_ = this.createIconDom_();
        Blockly.utils.aria.setRole(this.iconDom_, Blockly.utils.aria.Role.PRESENTATION);
        this.rowContents_.appendChild(this.iconDom_);

        this.addColourBorder_(this.colour_);
    
        return this.htmlDiv_;
      }

    /**
     * Adds the colour to the toolbox.
     * This is called on category creation and whenever the theme changes.
     * @override
     */
    addColourBorder_(colour) {
        this.rowDiv_.style.backgroundColor = colour;
    }

    /**
     * Sets the style for the category when it is selected or deselected.
     * @param {boolean} isSelected True if the category has been selected,
     *     false otherwise.
     * @override
     */
    setSelected(isSelected) {
        // Swap for a different icon when the category is selected.
        const icon = this.iconDom_;
        if (isSelected) {
            icon.style.color = this.colour_;
            icon.src = iconSrcStrPrefix + this.selectedIcon_ + iconSrcStrSuffix;
        } else {
            icon.src = iconSrcStrPrefix + this.baseIcon_ + iconSrcStrSuffix;
        }
        // This is used for accessibility purposes.
        Blockly.utils.aria.setState(/** @type {!Element} */(this.htmlDiv_),
            Blockly.utils.aria.State.SELECTED, isSelected);

    }

    /**
     * Creates the dom used for the icon.
     * @return {HTMLElement} The element for the icon.
     * @override
     */
    createIconDom_() {
        const iconImg = document.createElement('img');
        iconImg.src = iconSrcStrPrefix + this.baseIcon_ + iconSrcStrSuffix;
        iconImg.alt = this.categoryName_;
        iconImg.width = '45';
        iconImg.height = '45';
        return iconImg;
    }
}

Blockly.registry.register(
    Blockly.registry.Type.TOOLBOX_ITEM,
    Blockly.ToolboxCategory.registrationName,
    CustomCategory, true);