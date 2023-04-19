import $ from 'jquery';
import { isDesktopXlUp } from '../../../js/utils/breakpoints';

// Change Language Switcher Label Depending of Window Resolution
export const updateLanguageSwitcherLinkLabel = () => {
    const languageSwitcher = $('#languageSwitcher');
    const languageSwitcherLink = languageSwitcher.find('.js-bf-header__language-switcher__link')[0];
    const linkLabel = languageSwitcherLink.attributes.title.value;
    const linkLang = languageSwitcherLink.attributes.language.value;

    // Change link label
    if (!isDesktopXlUp()) {
        languageSwitcherLink.text = linkLabel;
    } else {
        if (languageSwitcherLink.text !== linkLang) languageSwitcher.removeClass('bf-visible');

        languageSwitcherLink.text = linkLang;
    }

    // When the label is updated, make visible the link
    languageSwitcher.addClass('bf-visible');
};
