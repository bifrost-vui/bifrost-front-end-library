import $ from 'jquery';
import { _window } from '../../../js/utils/window';
import { MegaMenu } from './mega-menu';
import { BurgerMenu } from './burger-menu';
import { SearchBar } from './search-bar';
import { AccountMenu } from './account-menu';

/**
 * Toggle Button Aria-Label
 *
 * @param {jQuery object} button - Button element
 * @param {boolean} isOpen - Button's target open state
 */
export const toggleButtonAriaLabel = (button, isOpen, otherButtonToToggleFalse = null) => {
    // Get data labels
    const buttonClosedLabel = button.data('label-closed');
    const buttonOpenedLabel = button.data('label-opened');

    // Toggle icons depending of the menu state
    if (isOpen) {
        button.attr('aria-label', buttonOpenedLabel);
    } else {
        button.attr('aria-label', buttonClosedLabel);
    }

    // If there is another button to toggle the "aria-label" to its false state
    if (otherButtonToToggleFalse !== null) {
        toggleButtonAriaLabel(otherButtonToToggleFalse, false);
    }
};

/**
 * Close Popover
 */
export const triggerClosePopOver = (button, isOpen) => {
    if (button.length > 0 && isOpen) {
        button.trigger('click');
    }
};

/**
 * Toggle Background Overlay
 */
export const toggleBackgroundOverlay = () => {
    // Get Background Overlay
    const backgroundOverlay = $('.js-bf-background-overlay');

    // Check if "Mega Menu", "Account Menu" or "Search Bar" is open
    const isBackgroundOverlayNeeded = MegaMenu.isOpen || BurgerMenu.isOpen || SearchBar.isOpen || AccountMenu.isOpen;

    if (isBackgroundOverlayNeeded) {
        _window.freeze();
        backgroundOverlay.addClass('bf-visible');
    } else {
        _window.unfreeze();
        backgroundOverlay.removeClass('bf-visible');
    }
};
