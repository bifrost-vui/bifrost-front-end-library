import $                from 'jquery';
import { _window }      from '../../../js/utils/window';
import { isDesktopUp }  from '../../../js/utils/breakpoints';


$(function ()
{
    // Mega-Menu
    const navMain       = '.bf-header';
    const navItem       = '.js-bf-megamenu__nav-item';
    const navLink       = '.js-bf-megamenu__nav-link';
    const navClose      = '.js-bf-megamenu__close';
    const navFullHeight = '.js-bf-megamenu__full-height';

    let isDropdownMegamenuOpen = false;

    // Tabs
    const tabsTab       = '.js-bf-tabs__tab';

	const closeMegamenu = function(e)
	{
		if(isDropdownMegamenuOpen)
		{
            $(navItem, navMain).removeClass('open');
            _window.unfreeze();
            isDropdownMegamenuOpen = false;
		}
	};

	$(navLink, navMain).on('click', function(e){
		e.preventDefault();
		
		if($(this).parents(navItem).hasClass('open')) {
			closeMegamenu();
			
		} else {
			if(!isDropdownMegamenuOpen) {
				_window.freeze();
				isDropdownMegamenuOpen = true;
			}

			$(this).parents(navItem)
				.toggleClass('open js-new-tab')
				.trigger('dropdownOpen');

			setTimeout(function () {
				$(navItem + ':not(".js-new-tab")', navMain)
					.removeClass('open')
					.trigger('dropdownClose');
				$(navItem + '.js-new-tab', navMain).removeClass('js-new-tab');
			}, 500);
		}
	});

	$(navClose, navMain).on('click', closeMegamenu);

	const updateMegamenuHeight = function () {
		const $menu = $(navFullHeight, navMain);
		if (!isDesktopUp()) {
			$menu.css('max-height', window.innerHeight - $(navMain).height());
		} else {
			$menu.css('max-height', '');
		}
	};

	$(window).on('resize', updateMegamenuHeight);
	updateMegamenuHeight();

	// Closing megamenu on click asive nav buttons
	// ---------------------------------------------------------------------
	$('.js-bf-dropdown-fixed-viewport.dropdown', navMain).on('show.bs.dropdown', function (e) {
		_window.freeze();
		$(navItem, navMain).removeClass('open');
	});

	$('.js-bf-dropdown-fixed-viewport.dropdown', navMain).on('hide.bs.dropdown', function (e) {
		_window.unfreeze();
	});

	// Change tabindex for active submenu
	// ---------------------------------------------------------------------
	$(navItem, navMain).on('shown.bs.dropdown', function (e) {
		$('a:first-of-type', this).each(function(index, value){
			$(this).attr('tabindex', '');
			if(index === 0)  { $(this).focus(); }
		});
	});

	$(navItem, navMain).on('hide.bs.dropdown', function (e) {
		$('a', this).each(function(){
			$(this).attr('tabindex', '-1');
		});
	});

	// Controlling the tabindex, we make tabbeable the elements inside the dropdown menu
	// ---------------------------------------------------------------------
	$(navItem).on('dropdownOpen', function(e) {
		let $this  = $(this);
		let $tabs  = $this.find(tabsTab);
		let $links = $this.find('.js-bf-dropdown-item-link');

		if($this.hasClass('open')) {
			$tabs.attr('tabindex', 0);
			$links.attr('tabindex', 0);   
			e.preventDefault();
		}
	});

	$(navItem).on('dropdownClose', function(e) {
		let $closed = $(navItem + ':not(".open")');

		$closed.each(function(){
			let $tabsClosed  = $(this).find(tabsTab);
			let $linksClosed = $(this).find('.js-bf-dropdown-item-link');
			$tabsClosed.attr('tabindex', -1);
			$linksClosed.attr('tabindex', -1);
		});
	});
});

// Unified Navigation Tabbing
const keyTab = 9;

$(function () {
	'use strict';
    
    const navMain       = '.bf-header';
    const navItem       = '.js-bf-megamenu__nav-item';
    const navLink       = '.js-bf-megamenu__nav-link';
    const tabsTab       = '.js-bf-tabs__tab';

	const $megamenuLink = $('.js-bf-dropdown-item-link');

    // Search Bar
	const searchBtn    = '.js-bf-search-toggler';


	$(navLink).keydown(function (e) {
		if (e.which == keyTab) {
			const $parent = $(this).parent();
			if(e.shiftKey === true) {
				// To return to the last tab, we have to get the list of visible tabs and select the last one. 
				// We're gonna take advantage of the ''.active' and ''.open' classes to get the correct ones
				// then we navigate to the parents of those elements to get the complete list.
				let $megamenuTabs = $(tabsTab + '.active').parent().find(tabsTab);
				let $megamenuDropdownItem = $(navItem + '.open');
				let $megamenuDropdownNext = $megamenuDropdownItem.next().children();

				// This behavior will only be valid when:
				//   - the open dropdown is a tabbed one
				//   - the focus is on the next open menu item
				if($megamenuDropdownItem.find(tabsTab).length > 0) {
					if($megamenuDropdownNext.is(':focus')) {
						$megamenuTabs.last().focus();
						e.preventDefault();
					}
				}
			}

			if(e.shiftKey === false) {
				// focus the first element so the user can start tabbing between elements
				let $megamenuItems;
				if($parent.hasClass('open')) {
					if($parent.find(tabsTab).length > 0) {
						$megamenuItems = $parent.find(tabsTab);
					} else {
						$megamenuItems = $parent.find('.js-bf-dropdown-item-link');
					}
					$megamenuItems.first().focus();
					e.preventDefault();
				}
			}
		}
	});

	$(tabsTab).keydown(function (e) {
		if (e.which == keyTab) {
			const $parent = $(this).parents().closest('.js-bf-megamenu__panel');
			let $megamenuItems = $parent.find(tabsTab);
			let $megamenuPane  = $parent.find('.js-bf-tab-pane.show.active');
			let $megamenuLinks = $megamenuPane.find('.js-bf-dropdown-item-link');
			let $megamenuItemsDropdown = $('.js-bf-megamenu__nav-item');

			// don't use e.preventDefault outside conditions
			// the default behavior is good enough for navigation
			if (e.shiftKey === false) {
				if($megamenuItems.last().is(':focus')) {
					let $itemActive = $megamenuItemsDropdown.filter('.open');
					if($itemActive.next().length > 0) {
						$itemActive.next().find('.js-bf-megamenu__nav-link').focus();
					} else {
						$(megamenuSearchBtn).focus();
					}
					e.preventDefault();
				}

				if($(this).hasClass('active')) {
					if($megamenuLinks.length > 0) {
						$megamenuLinks.first().focus();
						e.preventDefault();
					}
				}
			}
		}
	});

	$megamenuLink.keydown(function (e) {
		if (e.which == keyTab) {
			const $parent = $(this).parents().closest('.js-bf-megamenu__panel');
			let $megamenuPaneTabs  = $parent.find('.js-bf-tab-pane.show.active');
			let $megamenuPaneItem  = $parent.find('.js-bf-dropdown-megamenu');
			let $megamenuTabsLinks = $megamenuPaneTabs.find('.js-bf-dropdown-item-link');
			let $megamenuItemLinks = $megamenuPaneItem.find('.js-bf-dropdown-item-link');

			if($megamenuTabsLinks.first().is(':focus')) {
				if(e.shiftKey === true) {
					let $megamenuItems = $parent.find(tabsTab);
					let $itemActive = $megamenuItems.filter('.active');
					$itemActive.focus();
					e.preventDefault();
				}
			}
			
			// Controls the behavior of the very last element on the last tab on a tabbable menu
			if($megamenuTabsLinks.last().is(':focus')
			|| $megamenuItemLinks.last().is(':focus')) {
				if(e.shiftKey === false) {

					// Let the browser redirect the focus to the next menu element, so the user can exit the tab navigation
					if($megamenuTabsLinks.last().is(':focus')) {
						if($megamenuPaneItem.last().parent().hasClass('active') === false) {
							e.preventDefault();
						}
					}

					// Redirect the focus to the next tab on the list
					let $megamenuItems = $parent.find(tabsTab);
					let $itemActive = $megamenuItems.filter('.active');
					$itemActive.next().focus();
				}
			}
		}
	});

	$(searchBtn).keydown(function (e) {
        debugger;
		// This lets us 'shift + tab' to the last visible tab
		if (e.which == keyTab && e.shiftKey) {
			let $megamenuTabs = $('.js-bf-tabs__tab.active').parent().find(tabsTab);
			let $megamenuDropdownItem = $('.js-bf-megamenu__nav-item.open');
			let $megamenuDropdownNext = $megamenuDropdownItem.next().children();

			if($megamenuDropdownItem.find(tabsTab).length > 0) {
				if($megamenuDropdownNext.length <= 0) {
					$megamenuTabs.last().focus();
					e.preventDefault();
				}
			}
		}
	});

    const displaySearchBar = function() {
        setTimeout(function() {
            $('.js-input-search').focus();
        }, 1000);
    }

    $(searchBtn, navMain).on('click', displaySearchBar);
});

