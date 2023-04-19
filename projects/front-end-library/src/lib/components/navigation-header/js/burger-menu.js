import $ from 'jquery';
import { _window } from '../../../js/utils/window';
import { isDesktopXlUp } from '../../../js/utils/breakpoints';

// Namespace
export let BurgerMenu = {
    isBurgerMenuOpen: false,
};

const burgerMenuButtonSelector = '.js-bf-burger-menu-toggle';
const mainMenuContainerSelector = '#mainMenuContainer';

// Functions to hide main menu container on mobile/tablet and show it on desktop
const hideMainMenuOnMobileTablet = () => {
    const menuContainer = $(mainMenuContainerSelector);
    const hasCollapseClass = menuContainer.hasClass('collapse');

    if (hasCollapseClass === false) {
        menuContainer.addClass('collapse');
        menuContainer.removeClass('bf-visible');
    }
};
const showMainMenuOnDesktop = () => {
    const menuContainer = $(mainMenuContainerSelector);
    const hasCollapseClass = menuContainer.hasClass('collapse');

    if (hasCollapseClass === true) {
        menuContainer.removeClass('collapse');
        menuContainer.addClass('bf-visible');
    }
};

// Toggle burger menu button icons
const toggleBurgerMenuIcon = () => {
    // Get Burger Menu Button
    const button = $(burgerMenuButtonSelector);
};

// Add

/* ------------
    EXPORTS
------------ */

// Toggle burger menu (mobile/tablet)
export const toggleBurgerMenu = () => {
    // Get Burger Menu Buttons
    const button = $(burgerMenuButtonSelector);

    button.on('click', () => {
        toggleBurgerMenuIcon();

        if (BurgerMenu.isBurgerMenuOpen) {
            _window.unfreeze();
            BurgerMenu.isBurgerMenuOpen = false;
        } else {
            _window.freeze();
            BurgerMenu.isBurgerMenuOpen = true;
        }
    });
};

export const hideOrShowMainMenuContainer = () => {
    console.log('isDesktopXlUp', isDesktopXlUp());
    !isDesktopXlUp() ? hideMainMenuOnMobileTablet() : showMainMenuOnDesktop();
};
