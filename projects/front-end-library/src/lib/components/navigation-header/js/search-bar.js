import $ from 'jquery';
import { _window } from '../../../js/utils/window';
import { triggerCloseBurgerMenu } from './burger-menu';

// Toggle search bar button aria-label
const toggleSearchBarAriaLabel = (isSearchBarOpen) => {
    // Get search bar button
    const button = $(searchBarButtonSelector);

    // Get data labels
    const buttonClosedLabel = button.data('label-closed');
    const buttonOpenedLabel = button.data('label-opened');

    // Toggle icons depending of the menu state
    if (isSearchBarOpen) {
        button.attr('aria-label', buttonOpenedLabel);
    } else {
        button.attr('aria-label', buttonClosedLabel);
    }
};

/* ------------
    EXPORTS
------------ */

// Namespace
export let SearchBar = {
    isSearchBarOpen: false,
};

// Variables
export const searchBarButtonSelector = '.js-bf-search-bar-toggle';

// Functions
// Close Search Bar
export const triggerCloseSearchBar = () => {
    // Get search bar button
    const button = $(searchBarButtonSelector);

    if (SearchBar.isSearchBarOpen) {
        button.trigger('click');
    }
};

// Toggle search bar (mobile/tablet)
export const toggleSearchBar = () => {
    // Get search bar button
    const button = $(searchBarButtonSelector);

    // On Click
    button.on('click', () => {
        // Toggle the menu open state
        if (SearchBar.isSearchBarOpen) {
            _window.unfreeze();
            SearchBar.isSearchBarOpen = false;
        } else {
            _window.freeze();
            SearchBar.isSearchBarOpen = true;
            triggerCloseBurgerMenu();
        }

        // Toggle button's aria-label
        toggleSearchBarAriaLabel(SearchBar.isSearchBarOpen);
    });
};
