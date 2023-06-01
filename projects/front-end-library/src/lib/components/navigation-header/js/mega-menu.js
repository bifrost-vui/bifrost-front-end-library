import $ from 'jquery';
import { toggleButtonAriaLabel, triggerClosePopOver, toggleBackgroundOverlay } from './_utils';
import { AccountMenu } from './account-menu';

// Variables
const megaMenuFirstLevelButtonsSelector = '.js-bf-megamenu__nav-link';

/* ------------
    EXPORTS
------------ */

// Namespace
export let MegaMenu = {
    isOpen: false,
    activeMenuIndex: '',
    lastMenuIndex: '',
    getActiveMenuButton: function () {
        return $(megaMenuFirstLevelButtonsSelector + '[data-menu-index="' + this.activeMenuIndex + '"]');
    },
    getLastMenuButton: function () {
        return $(megaMenuFirstLevelButtonsSelector + '[data-menu-index="' + this.lastMenuIndex + '"]');
    },
    isClickedMenuActive: function (index) {
        return this.activeMenuIndex === index;
    },
    removeActiveMenuIndex: function () {
        this.isOpen = false;
        this.lastMenuIndex = this.activeMenuIndex;
        this.activeMenuIndex = '';
    },
    addActiveMenuIndex: function (index) {
        this.isOpen = true;
        this.lastMenuIndex = this.activeMenuIndex;
        this.activeMenuIndex = index;
    },
    toggleFirstLevelActiveClass: function () {
        // Get Mega Menu First-Level Items Button
        const buttons = $(megaMenuFirstLevelButtonsSelector);

        // Remove "active" class on all first level buttons
        buttons.removeClass('active');

        if (this.activeMenuIndex !== '') {
            const activeMenu = MegaMenu.getActiveMenuButton();
            activeMenu.addClass('active');
        }
    },
    closePopOver: function () {
        // Get current active menu button
        const button = MegaMenu.getActiveMenuButton();
        triggerClosePopOver(button, this.isOpen);
    },
};

// Init Mega Menu
export const initMegaMenu = () => {
    // Get Mega Menu First-Level Items Button
    const buttons = $(megaMenuFirstLevelButtonsSelector);

    // On Click
    buttons.on('click', (e) => {
        // Get button index
        const clickedMenu = $(e.currentTarget);
        const clickedMenuIndex = clickedMenu.data('menu-index');

        // Toggle the menu open state
        if (MegaMenu.isClickedMenuActive(clickedMenuIndex)) {
            MegaMenu.removeActiveMenuIndex();
        } else {
            MegaMenu.addActiveMenuIndex(clickedMenuIndex);

            // Close other popovers
            AccountMenu.closePopOver();
        }

        // Toggle button's "active" class
        MegaMenu.toggleFirstLevelActiveClass();

        // Toggle button's aria-label
        toggleButtonAriaLabel(
            clickedMenu,
            MegaMenu.isOpen,
            MegaMenu.getLastMenuButton().length > 0 ? MegaMenu.getLastMenuButton() : null
        );

        // Toggle Background Overvay
        toggleBackgroundOverlay();
    });
};
