import $ from 'jquery';
import { throttle } from '../../../js/utils/debounce-throttle';
import { updateLanguageSwitcherLinkLabel } from './language-switcher';
import { initMegaMenu } from './mega-menu';
import { initBurgerMenu } from './burger-menu';
import { initSearchBar } from './search-bar';
import { initAccountMenu } from './account-menu';

const resizeFunctions = () => {
    updateLanguageSwitcherLinkLabel();
};

$(function () {
    // Window Events
    $(window).on(
        'resize',
        throttle(() => resizeFunctions())
    );

    // Call functions for the first time
    initMegaMenu();
    initBurgerMenu();
    initSearchBar();
    initAccountMenu();
    updateLanguageSwitcherLinkLabel();
});
