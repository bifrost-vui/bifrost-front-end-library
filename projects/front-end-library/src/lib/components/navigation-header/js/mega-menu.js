import $ from 'jquery';
import { _window } from '../../../js/utils/window';

// Variables
const megaMenuFirstLevelButtonsSelector = '.js-bf-megamenu__nav-link';

// Toggle first-level button active class
const toggleFirstLevelActiveClass = (index) => {
    // Get Mega Menu First-Level Items Button
    const buttons = $(megaMenuFirstLevelButtonsSelector);

    // Remove "active" class on all first level buttons
    buttons.removeClass('active');

    if (index !== '') {
        const activeMenu = $(megaMenuFirstLevelButtonsSelector + '[data-menu-index="' + index + '"]');
        activeMenu.addClass('active');
    }
};

/* ------------
    EXPORTS
------------ */

// Namespace
export let MegaMenu = {
    activeMenuIndex: '',
    isClickedMenuActive: function (index) {
        return this.activeMenuIndex === index;
    },
    removeActiveMenuIndex: function () {
        this.activeMenuIndex = '';
    },
    addActiveMenuIndex: function (index) {
        this.activeMenuIndex = index;
    },
    toggleFirstLevelActiveClass: function () {
        // Get Mega Menu First-Level Items Button
        const buttons = $(megaMenuFirstLevelButtonsSelector);

        // Remove "active" class on all first level buttons
        buttons.removeClass('active');

        if (this.activeMenuIndex !== '') {
            const activeMenu = $(
                megaMenuFirstLevelButtonsSelector + '[data-menu-index="' + this.activeMenuIndex + '"]'
            );
            activeMenu.addClass('active');
        }
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
            //_window.unfreeze();
            MegaMenu.removeActiveMenuIndex();
        } else {
            //_window.freeze();
            MegaMenu.addActiveMenuIndex(clickedMenuIndex);
        }

        MegaMenu.toggleFirstLevelActiveClass();
    });
};
