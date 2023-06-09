import $ from 'jquery';
import { throttle } from '../../../js/utils/debounce-throttle';
import { isDesktopXlUp } from '../../../js/utils/breakpoints';
import { updateLanguageSwitcherLinkLabel } from './language-switcher';
import { MegaMenu, initMegaMenu } from './mega-menu';
import { BurgerMenu, initBurgerMenu } from './burger-menu';
import { SearchBar, initSearchBar } from './search-bar';
import { initAccountMenu } from './account-menu';

/* Close the different popovers according to different screen resolutions */
const closePopOversOnResize = () => {
    if (isDesktopXlUp()) {
        BurgerMenu.closePopOver();
        SearchBar.closePopOver();
    } else {
        MegaMenu.closePopOver();
    }
};

/* Functions to execute on screen resize */
const resizeFunctions = () => {
    updateLanguageSwitcherLinkLabel();
    closePopOversOnResize();
};

/* Dom Ready */
$(function () {
    // Screen Resize Event
    $(window).on(
        'resize',
        throttle(() => resizeFunctions())
    );

    // Init functions
    initMegaMenu();
    initBurgerMenu();
    initSearchBar();
    initAccountMenu();
    updateLanguageSwitcherLinkLabel();
});
