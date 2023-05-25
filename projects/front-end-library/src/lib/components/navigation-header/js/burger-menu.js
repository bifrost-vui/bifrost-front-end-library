import $ from 'jquery';
import { _window } from '../../../js/utils/window';
import { triggerCloseSearchBar } from './search-bar';

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

// Toggle burger menu button aria-label
const toggleBurgerMenuAriaLabel = (isMenuOpen) => {
    // Get burger menu button
    const button = $(burgerMenuButtonSelector);

    // Get data labels
    const buttonClosedLabel = button.data('label-closed');
    const buttonOpenedLabel = button.data('label-opened');

    // Toggle icons depending of the menu state
    if (isMenuOpen) {
        button.attr('aria-label', buttonOpenedLabel);
    } else {
        button.attr('aria-label', buttonClosedLabel);
    }
};

/* ------------
    EXPORTS
------------ */

// Namespace
export let BurgerMenu = {
    isBurgerMenuOpen: false,
};

// Variables
export const burgerMenuButtonSelector = '.js-bf-burger-menu-toggle';

// Functions
// Close Burger Menu
export const triggerCloseBurgerMenu = () => {
    // Get burger menu button
    const button = $(burgerMenuButtonSelector);

    if (BurgerMenu.isBurgerMenuOpen) {
        button.trigger('click');
    }
};

// Toggle burger menu (mobile/tablet)
export const toggleBurgerMenu = () => {
    // Get burger menu button
    const button = $(burgerMenuButtonSelector);

    // On Click
    button.on('click', () => {
        // Toggle the menu open state
        if (BurgerMenu.isBurgerMenuOpen) {
            _window.unfreeze();
            BurgerMenu.isBurgerMenuOpen = false;
        } else {
            _window.freeze();
            BurgerMenu.isBurgerMenuOpen = true;
            triggerCloseSearchBar();
        }

        // Toggle icons
        toggleBurgerMenuIcon(BurgerMenu.isBurgerMenuOpen);

        // Toggle button's aria-label
        toggleBurgerMenuAriaLabel(BurgerMenu.isBurgerMenuOpen);
    });
};
