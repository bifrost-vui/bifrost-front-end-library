import $ from 'jquery';
import { toggleButtonAriaLabel, triggerClosePopOver, toggleBackgroundOverlay } from './_utils';
import { BurgerMenu } from './burger-menu';
import { AccountMenu } from './account-menu';

// Variables
const searchBarButtonSelector = '.js-bf-search-bar-toggle';

/* ------------
    EXPORTS
------------ */

// Namespace
export let SearchBar = {
    isOpen: false,
    closePopOver: function () {
        // Get search bar button
        const button = $(searchBarButtonSelector);
        triggerClosePopOver(button, this.isOpen);
    },
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
            BurgerMenu.closePopOver();
            AccountMenu.closePopOver();
        }

        // Toggle button's aria-label
        toggleButtonAriaLabel(button, SearchBar.isOpen);

        // Toggle Background Overvay
        toggleBackgroundOverlay();
    });
};
