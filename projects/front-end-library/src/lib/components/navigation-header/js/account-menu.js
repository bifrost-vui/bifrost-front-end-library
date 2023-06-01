import $ from 'jquery';
import { triggerClosePopOver, toggleBackgroundOverlay } from './_utils';
import { triggerCloseMegaMenu } from './mega-menu';
import { triggerCloseBurgerMenu } from './burger-menu';
import { triggerCloseSearchBar } from './search-bar';

// Variables
export const accountMenuButtonSelector = '.js-bf-account-menu-toggle';

/* ------------
    EXPORTS
------------ */

// Namespace
export let AccountMenu = {
    isOpen: false,
};

// Functions
// Close Account Menu
export const triggerCloseAccountMenu = () => {
    // Get account menu button
    const button = $(accountMenuButtonSelector);
    triggerClosePopOver(button, AccountMenu.isOpen);
};

// Toggle account menu
export const initAccountMenu = () => {
    // Get account menu button
    const button = $(accountMenuButtonSelector);

    // On Click
    button.on('click', () => {
        // Toggle the menu open state
        if (AccountMenu.isOpen) {
            AccountMenu.isOpen = false;
        } else {
            AccountMenu.isOpen = true;

            // Close other popovers
            triggerCloseMegaMenu();
            triggerCloseSearchBar();
            triggerCloseBurgerMenu();
        }

        // Toggle Background Overvay
        toggleBackgroundOverlay();
    });
};
