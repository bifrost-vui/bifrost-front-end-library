import $ from 'jquery';
import { toggleButtonAriaLabel, triggerClosePopOver, toggleBackgroundOverlay } from './_utils';
import { triggerCloseBurgerMenu } from './burger-menu';
import { triggerCloseAccountMenu } from './account-menu';

/* ------------
    EXPORTS
------------ */

// Namespace
export let SearchBar = {
    isOpen: false,
};

// Variables
export const searchBarButtonSelector = '.js-bf-search-bar-toggle';

// Functions
// Close Search Bar
export const triggerCloseSearchBar = () => {
    // Get search bar button
    const button = $(searchBarButtonSelector);
    triggerClosePopOver(button, SearchBar.isOpen);
};

// Toggle search bar (mobile/tablet)
export const initSearchBar = () => {
    // Get search bar button
    const button = $(searchBarButtonSelector);

    // On Click
    button.on('click', () => {
        // Toggle the menu open state
        if (SearchBar.isOpen) {
            SearchBar.isOpen = false;
        } else {
            SearchBar.isOpen = true;

            // Close other popovers
            triggerCloseBurgerMenu();
            triggerCloseAccountMenu();
        }

        // Toggle button's aria-label
        toggleButtonAriaLabel(button, SearchBar.isOpen);

        // Toggle Background Overvay
        toggleBackgroundOverlay();
    });
};
