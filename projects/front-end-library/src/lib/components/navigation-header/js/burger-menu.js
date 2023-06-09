import $ from 'jquery';
import { toggleButtonAriaLabel, triggerClosePopOver, toggleBackgroundOverlay } from './_utils';
import { MegaMenu } from './mega-menu';
import { SearchBar } from './search-bar';
import { AccountMenu } from './account-menu';

// Variables
const burgerMenuButtonSelector = '.js-bf-burger-menu-toggle';
const burgerMenuIconClosedSelector = '.js-bf-burger-menu-toggle-closed';
const burgerMenuIconOpenedSelector = '.js-bf-burger-menu-toggle-opened';

/* ------------
    EXPORTS
------------ */

// Namespace
export let BurgerMenu = {
    isOpen: false,
    closePopOver: function () {
        // Get burger menu button
        const button = $(burgerMenuButtonSelector);
        triggerClosePopOver(button, this.isOpen);
    },
    toggleBurgerMenuIcon: function () {
        // Get burger menu icons
        const iconClosed = $(burgerMenuIconClosedSelector);
        const iconOpened = $(burgerMenuIconOpenedSelector);

        // Toggle icons depending of the menu state
        if (this.isOpen) {
            iconClosed.addClass('d-none');
            iconOpened.removeClass('d-none');
        } else {
            iconClosed.removeClass('d-none');
            iconOpened.addClass('d-none');
        }
    },
};

// Toggle burger menu (mobile/tablet)
export const initBurgerMenu = () => {
    // Get burger menu button
    const button = $(burgerMenuButtonSelector);

    // On Click
    button.on('click', () => {
        // Toggle the menu open state
        if (BurgerMenu.isOpen) {
            BurgerMenu.isOpen = false;
        } else {
            BurgerMenu.isOpen = true;

            // Close other popovers
            MegaMenu.closePopOver();
            SearchBar.closePopOver();
            AccountMenu.closePopOver();
        }

        // Toggle icons
        BurgerMenu.toggleBurgerMenuIcon();

        // Toggle button's aria-label
        toggleButtonAriaLabel(button, BurgerMenu.isOpen);

        // Toggle Background Overvay
        toggleBackgroundOverlay();
    });
};
