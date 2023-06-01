import $ from 'jquery';
import { toggleButtonAriaLabel, triggerClosePopOver, toggleBackgroundOverlay } from './_utils';
import { triggerCloseSearchBar } from './search-bar';
import { triggerCloseAccountMenu } from './account-menu';

// Variables
const burgerMenuIconClosedSelector = '.js-bf-burger-menu-toggle-closed';
const burgerMenuIconOpenedSelector = '.js-bf-burger-menu-toggle-opened';

// Toggle burger menu button icons
const toggleBurgerMenuIcon = (isMenuOpen) => {
    // Get burger menu icons
    const iconClosed = $(burgerMenuIconClosedSelector);
    const iconOpened = $(burgerMenuIconOpenedSelector);

    // Toggle icons depending of the menu state
    if (isMenuOpen) {
        iconClosed.addClass('d-none');
        iconOpened.removeClass('d-none');
    } else {
        iconClosed.removeClass('d-none');
        iconOpened.addClass('d-none');
    }
};

/* ------------
    EXPORTS
------------ */

// Namespace
export let BurgerMenu = {
    isOpen: false,
};

// Variables
export const burgerMenuButtonSelector = '.js-bf-burger-menu-toggle';

// Functions
// Close Burger Menu
export const triggerCloseBurgerMenu = () => {
    // Get burger menu button
    const button = $(burgerMenuButtonSelector);
    triggerClosePopOver(button, BurgerMenu.isOpen);
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
            triggerCloseSearchBar();
            triggerCloseAccountMenu();
        }

        // Toggle icons
        toggleBurgerMenuIcon(BurgerMenu.isOpen);

        // Toggle button's aria-label
        toggleButtonAriaLabel(button, BurgerMenu.isOpen);

        // Toggle Background Overvay
        toggleBackgroundOverlay();
    });
};
