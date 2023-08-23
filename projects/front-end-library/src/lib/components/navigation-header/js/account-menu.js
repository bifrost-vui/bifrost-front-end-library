import $ from 'jquery';
import { throttle } from '../../../js/utils/debounce-throttle';
import { triggerClosePopOver, toggleBackgroundOverlay } from './_utils';
import { MegaMenu } from './mega-menu';
import { BurgerMenu } from './burger-menu';
import { SearchBar } from './search-bar';

// Variables
const accountMenuButtonSelector = '.js-bf-account-menu-toggle';

/* ------------
    EXPORTS
------------ */

// Namespace
export let AccountMenu = {
    isOpen: false,
    toggleActiveClass: function () {
        // Get Mega Menu First-Level Items Button
        const button = $(accountMenuButtonSelector);

        if (this.isOpen) {
            button.addClass('active');
        } else {
            button.removeClass('active');
        }
    },
    closePopOver: function () {
        // Get account menu button
        const button = $(accountMenuButtonSelector);
        triggerClosePopOver(button, this.isOpen);
    },
};

// Toggle account menu
export const initAccountMenu = () => {
    // Get account menu button
    const button = $(accountMenuButtonSelector);

    // On Click
    button.on(
        'click',
        throttle(() => {
            // Toggle the menu open state
            if (AccountMenu.isOpen) {
                AccountMenu.isOpen = false;
            } else {
                AccountMenu.isOpen = true;

                // Close other popovers
                MegaMenu.closePopOver();
                SearchBar.closePopOver();
                BurgerMenu.closePopOver();
            }

            // Toggle button's "active" class
            AccountMenu.toggleActiveClass();

            // Toggle Background Overvay
            toggleBackgroundOverlay();
        }, 250)
    );
};
