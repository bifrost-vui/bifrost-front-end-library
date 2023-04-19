import $ from 'jquery';
import { throttle } from '../../../js/utils/debounce-throttle';
import { updateLanguageSwitcherLinkLabel } from './language-switcher';
import { BurgerMenu, toggleBurgerMenu, hideOrShowMainMenuContainer } from './burger-menu';

const resizeFunctions = () => {
    hideOrShowMainMenuContainer();
    updateLanguageSwitcherLinkLabel();
};

$(function () {
    // Window Events
    $(window).on(
        'resize',
        throttle(() => resizeFunctions())
    );

    // Call functions for the first time
    toggleBurgerMenu();
    hideOrShowMainMenuContainer();
    updateLanguageSwitcherLinkLabel();
});
