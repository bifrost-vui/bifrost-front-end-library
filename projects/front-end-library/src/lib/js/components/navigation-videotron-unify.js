import $ from 'jquery';
import { _window } from '../utils/window';
import { isDesktopUp } from '../utils/breakpoints';

$(function () {
    const navUnify = '.navbar--videotron-unify';
    let isDropdownMegamenuOpen = false;

    const closeMegamenu = function (e) {
        if (isDropdownMegamenuOpen) {
            $('.js-nav-item--dropdown-megamenu', navUnify).removeClass('open');
            _window.unfreeze();
            isDropdownMegamenuOpen = false;
        }
    };

    $('.js-dropdown-megamenu-toggler', navUnify).on('click', function (e) {
        e.preventDefault();

        if ($(this).parents('.js-nav-item--dropdown-megamenu').hasClass('open')) {
            closeMegamenu();
        } else {
            if (!isDropdownMegamenuOpen) {
                _window.freeze();
                isDropdownMegamenuOpen = true;
            }

            $(this).parents('.js-nav-item--dropdown-megamenu').toggleClass('open js-new-tab').trigger('dropdownOpen');

            setTimeout(function () {
                $(".js-nav-item--dropdown-megamenu:not('.js-new-tab')", navUnify)
                    .removeClass('open')
                    .trigger('dropdownClose');
                $('.js-nav-item--dropdown-megamenu.js-new-tab', navUnify).removeClass('js-new-tab');
            }, 500);
        }
    });

    $('.js-dropdown-megamenu-close', navUnify).on('click', closeMegamenu);

    const updateMegamenuHeight = function () {
        const $menu = $('.js-dropdown-menu--full-height', navUnify);
        if (!isDesktopUp()) {
            $menu.css('max-height', window.innerHeight - $(navUnify).height());
        } else {
            $menu.css('max-height', '');
        }
    };

    $(window).on('resize', updateMegamenuHeight);
    updateMegamenuHeight();

    // Closing megamenu on click asive nav buttons
    // ---------------------------------------------------------------------
    $('.js-dropdown-fixed-viewport.dropdown', navUnify).on('show.bs.dropdown', function (e) {
        _window.freeze();
        $('.js-nav-item--dropdown-megamenu', navUnify).removeClass('open');
    });

    $('.js-dropdown-fixed-viewport.dropdown', navUnify).on('hide.bs.dropdown', function (e) {
        _window.unfreeze();
    });

    // Change tabindex for active submenu
    // ---------------------------------------------------------------------
    $('.js-nav-item--dropdown-megamenu', navUnify).on('shown.bs.dropdown', function (e) {
        $('a:first-of-type', this).each(function (index, value) {
            $(this).attr('tabindex', '');
            if (index === 0) {
                $(this).focus();
            }
        });
    });

    $('.js-nav-item--dropdown-megamenu', navUnify).on('hide.bs.dropdown', function (e) {
        $('a', this).each(function () {
            $(this).attr('tabindex', '-1');
        });
    });

    // Controlling the tabindex, we make tabbeable the elements inside the dropdown menu
    // ---------------------------------------------------------------------
    $('.js-nav-item--dropdown-megamenu').on('dropdownOpen', function (e) {
        let $this = $(this);
        let $tabs = $this.find('.js-nav-tabs--vertical__item-link');
        let $links = $this.find('.js-dropdown-item-link');

        if ($this.hasClass('open')) {
            $tabs.attr('tabindex', 0);
            $links.attr('tabindex', 0);
            e.preventDefault();
        }
    });

    $('.js-nav-item--dropdown-megamenu').on('dropdownClose', function (e) {
        let $closed = $(".js-nav-item--dropdown-megamenu:not('.open')");

        $closed.each(function () {
            let $tabsClosed = $(this).find('.js-nav-tabs--vertical__item-link');
            let $linksClosed = $(this).find('.js-dropdown-item-link');
            $tabsClosed.attr('tabindex', -1);
            $linksClosed.attr('tabindex', -1);
        });
    });
});

// Unified Navigation Tabbing
const keyTab = 9;

$(function () {
    'use strict';

    const $megamenuToggler = $('.js-dropdown-megamenu-toggler');
    const $megamenuTab = $('.js-nav-tabs--vertical__item-link');
    const $megamenuLink = $('.js-dropdown-item-link');
    const $megamenuSearchBtn = $('.js-search-toggler-btn');

    $megamenuToggler.keydown(function (e) {
        if (e.which == keyTab) {
            const $parent = $(this).parent();
            if (e.shiftKey === true) {
                // To return to the last tab, we have to get the list of visible tabs and select the last one.
                // We're gonna take advantage of the "".active" and "".open" classes to get the correct ones
                // then we navigate to the parents of those elements to get the complete list.
                let $megamenuTabs = $('.js-nav-tabs--vertical__item-link.active')
                    .parent()
                    .find('.js-nav-tabs--vertical__item-link');
                let $megamenuDropdownItem = $('.js-nav-item--dropdown-megamenu.open');
                let $megamenuDropdownNext = $megamenuDropdownItem.next().children();

                // This behavior will only be valid when:
                //   - the open dropdown is a tabbed one
                //   - the focus is on the next open menu item
                if ($megamenuDropdownItem.find('.js-nav-tabs--vertical__item-link').length > 0) {
                    if ($megamenuDropdownNext.is(':focus')) {
                        $megamenuTabs.last().focus();
                        e.preventDefault();
                    }
                }
            }

            if (e.shiftKey === false) {
                // focus the first element so the user can start tabbing between elements
                let $megamenuItems;
                if ($parent.hasClass('open')) {
                    if ($parent.find('.js-nav-tabs--vertical__item-link').length > 0) {
                        $megamenuItems = $parent.find('.js-nav-tabs--vertical__item-link');
                    } else {
                        $megamenuItems = $parent.find('.js-dropdown-item-link');
                    }
                    $megamenuItems.first().focus();
                    e.preventDefault();
                }
            }
        }
    });

    $megamenuTab.keydown(function (e) {
        if (e.which == keyTab) {
            const $parent = $(this).parents().closest('.js-dropdown-menu--megamenu');
            let $megamenuItems = $parent.find('.js-nav-tabs--vertical__item-link');
            let $megamenuPane = $parent.find('.js-tab-pane.show.active');
            let $megamenuLinks = $megamenuPane.find('.js-dropdown-item-link');
            let $megamenuItemsDropdown = $('.js-nav-item--dropdown-megamenu');

            // don't use e.preventDefault outside conditions
            // the default behavior is good enough for navigation
            if (e.shiftKey === false) {
                if ($megamenuItems.last().is(':focus')) {
                    let $itemActive = $megamenuItemsDropdown.filter('.open');
                    if ($itemActive.next().length > 0) {
                        $itemActive.next().find('.js-dropdown-megamenu-toggler').focus();
                    } else {
                        $('.js-search-toggler-btn').focus();
                    }
                    e.preventDefault();
                }

                if ($(this).hasClass('active')) {
                    if ($megamenuLinks.length > 0) {
                        $megamenuLinks.first().focus();
                        e.preventDefault();
                    }
                }
            }
        }
    });

    $megamenuLink.keydown(function (e) {
        if (e.which == keyTab) {
            const $parent = $(this).parents().closest('.js-dropdown-menu--megamenu');
            let $megamenuPaneTabs = $parent.find('.js-tab-pane.show.active');
            let $megamenuPaneItem = $parent.find('.js-dropdown-megamenu');
            let $megamenuTabsLinks = $megamenuPaneTabs.find('.js-dropdown-item-link');
            let $megamenuItemLinks = $megamenuPaneItem.find('.js-dropdown-item-link');

            if ($megamenuTabsLinks.first().is(':focus')) {
                if (e.shiftKey === true) {
                    let $megamenuItems = $parent.find('.js-nav-tabs--vertical__item-link');
                    let $itemActive = $megamenuItems.filter('.active');
                    $itemActive.focus();
                    e.preventDefault();
                }
            }

            // Controls the behavior of the very last element on the last tab on a tabbable menu
            if ($megamenuTabsLinks.last().is(':focus') || $megamenuItemLinks.last().is(':focus')) {
                if (e.shiftKey === false) {
                    // Let the browser redirect the focus to the next menu element, so the user can exit the tab navigation
                    if ($megamenuTabsLinks.last().is(':focus')) {
                        if ($megamenuPaneItem.last().parent().hasClass('active') === false) {
                            e.preventDefault();
                        }
                    }

                    // Redirect the focus to the next tab on the list
                    let $megamenuItems = $parent.find('.js-nav-tabs--vertical__item-link');
                    let $itemActive = $megamenuItems.filter('.active');
                    $itemActive.next().focus();
                }
            }
        }
    });

    $megamenuSearchBtn.keydown(function (e) {
        // This lets us "shift + tab" to the last visible tab
        if (e.which == keyTab && e.shiftKey) {
            let $megamenuTabs = $('.js-nav-tabs--vertical__item-link.active')
                .parent()
                .find('.js-nav-tabs--vertical__item-link');
            let $megamenuDropdownItem = $('.js-nav-item--dropdown-megamenu.open');
            let $megamenuDropdownNext = $megamenuDropdownItem.next().children();

            if ($megamenuDropdownItem.find('.js-nav-tabs--vertical__item-link').length > 0) {
                if ($megamenuDropdownNext.length <= 0) {
                    $megamenuTabs.last().focus();
                    e.preventDefault();
                }
            }
        }
    });
});
