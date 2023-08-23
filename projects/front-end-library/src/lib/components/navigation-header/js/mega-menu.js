import $ from 'jquery';
import { throttle } from '../../../js/utils/debounce-throttle';
import { triggerClosePopOver, toggleBackgroundOverlay } from './_utils';
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
    previousActiveMenuIndex: '',
    getActiveMenuButton: function () {
        return $(megaMenuFirstLevelButtonsSelector + '[data-menu-index="' + this.activeMenuIndex + '"]');
    },
    getPreviousActiveMenuButton: function () {
        return $(megaMenuFirstLevelButtonsSelector + '[data-menu-index="' + this.previousActiveMenuIndex + '"]');
    },
    isClickedMenuActive: function (index) {
        return this.activeMenuIndex === index;
    },
    removeActiveMenuIndex: function () {
        this.isOpen = false;
        this.previousActiveMenuIndex = '';
        this.activeMenuIndex = '';
    },
    addActiveMenuIndex: function (index) {
        this.isOpen = true;
        this.previousActiveMenuIndex = this.activeMenuIndex != '' ? this.activeMenuIndex : index;
        this.activeMenuIndex = index;
    },
    toggleFirstLevelActiveClass: function () {
        // Get Mega Menu First-Level Items Button
        const buttons = $(megaMenuFirstLevelButtonsSelector);

        // Remove "active" class on all first level buttons
        buttons.removeClass('active');

        if (this.activeMenuIndex !== '') {
            const activeMenu = this.getActiveMenuButton();
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
    buttons.on(
        'click',
        throttle((e) => {
            // Get button index
            const clickedMenu = $(e.currentTarget);
            const clickedMenuIndex = clickedMenu.data('menu-index');

            // Toggle the menu open state
            if (MegaMenu.isClickedMenuActive(clickedMenuIndex)) {
                MegaMenu.removeActiveMenuIndex();
            } else {
                // If there is a submenu already open, close it
                if (MegaMenu.previousActiveMenuIndex !== '') {
                    // TODO: Find a better way to close
                    MegaMenu.closePopOver();
                }

                MegaMenu.addActiveMenuIndex(clickedMenuIndex);

                // Close other popovers
                AccountMenu.closePopOver();
            }

            // Toggle button's "active" class
            MegaMenu.toggleFirstLevelActiveClass();

            // Toggle Background Overvay
            toggleBackgroundOverlay();
        }, 250)
    );
};
