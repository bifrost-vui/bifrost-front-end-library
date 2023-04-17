import $ from 'jquery';
import { _window } from '../../../js/utils/window';
import { isDesktopXlUp } from '../../../js/utils/breakpoints';

$(function () {
    const languageSwitcherLink = '.js-bf-header__language-switcher__link';

    // Change Language Switcher Label Depending of Window Resolution
    const updateLanguageSwitcherLinkLabel = function () {
        const $link = $(languageSwitcherLink);
        const $linkLabel = $link[0].attributes.title.value;
        const $linkLang = $link[0].attributes.language.value;

        if (!isDesktopXlUp()) {
            $link[0].text = $linkLabel;
        } else {
            $link[0].text = $linkLang;
        }

        $link.addClass('loaded');
    }

    $(window).on('resize', updateLanguageSwitcherLinkLabel);
    updateLanguageSwitcherLinkLabel();
});
