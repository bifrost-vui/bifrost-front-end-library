import $ from 'jquery';
import { _window } from '../../../js/utils/window';
import { MegaMenu } from './mega-menu';
import { BurgerMenu } from './burger-menu';
import { SearchBar } from './search-bar';
import { AccountMenu } from './account-menu';

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
