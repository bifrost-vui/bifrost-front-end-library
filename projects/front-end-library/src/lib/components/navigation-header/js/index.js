import $ from 'jquery';
import { throttle } from '../../../js/utils/debounce-throttle';
import { updateLanguageSwitcherLinkLabel } from './language-switcher';
import { toggleBurgerMenu } from './burger-menu';
import { toggleSearchBar } from './search-bar';
import { initMegaMenu } from './mega-menu';

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
    toggleBurgerMenu();
    toggleSearchBar();
    updateLanguageSwitcherLinkLabel();
});
