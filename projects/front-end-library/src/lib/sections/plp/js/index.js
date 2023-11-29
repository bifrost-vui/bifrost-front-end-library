import $ from 'jquery';
import { _window, currentWindowScroll } from '../../../js/utils/window';
import { throttle } from '../../../js/utils/debounce-throttle';
import { isDesktopUp } from '../../../js/utils/breakpoints';

/* Variables */
const nbResultsMobileSticky = '.js-bf-plp-nb-results-mobile-sticky';
const filtersContainer = '#plpFiltersContainer';
const filtersContainerInner = '.js-bf-plp-filters-container-inner';
const filtersContainerMobileTitle = '.js-bf-plp-filters-container-mobile-title';
const filtersMySelectionContainer = '.js-bf-plp-filters-container-my-selection';
const filtersMySelectionTitleAndButtonContainer = '.js-bf-plp-my-selection-title-and-button-container';
const filtersMySelectionDeleteAllButton = '.js-bf-plp-filters-my-selection-delete-all-button';
const filterChipsGroup = '.js-bf-plp-filters-container-chips-group';
const filterCheckboxes = '.js-bf-filter__checkboxes';

let plpComponent = {
    isMobileFiltersOpen: false,
};

/* Functions */
const setIsMobileFiltersOpen = function (value) {
    plpComponent.isMobileFiltersOpen = value;
};

const toggleChip = function ($filterCheckbox) {
    const checkboxId = $filterCheckbox.attr('id');
    const checkboxLabel = $filterCheckbox.next().find('span:last-child').text();
    const isChecked = $filterCheckbox.prop('checked');

    if (isChecked) {
        // Add new chip
        const $chipTemplateSource = $('.js-bf-filters-chip-template');

        let chipTemplate = $chipTemplateSource.clone();
        chipTemplate.attr('id', checkboxId + '_chip');
        chipTemplate.find('.bf-chip__label').text(checkboxLabel);
        chipTemplate.find('.bf-chip__button').attr('onclick', "removeFilter('" + checkboxId + "')");
        chipTemplate.removeClass(['d-none', 'bf-chip--disabled', 'js-bf-filters-chip-template']);
        chipTemplate.find('.bf-chip__button').attr('disabled', false);

        chipTemplate.appendTo(filterChipsGroup);
    } else {
        // Remove chip
        $('#' + checkboxId + '_chip').remove();
    }
};

const toggleStickyNbResultsAndMobileButton = function ($nbResultsMobileSticky, elemOffsetTop, $filtersContainer) {
    const hasFiltersContainerCollapseClass = $filtersContainer.hasClass('collapse');

    // "16" is 16px, or 1rem... it's for the padding top when the box is sticky
    if (currentWindowScroll.top >= elemOffsetTop - 16) {
        $nbResultsMobileSticky.addClass('sticky');
    } else {
        if (hasFiltersContainerCollapseClass) {
            $nbResultsMobileSticky.removeClass('sticky');
        }
    }
};

const moveDeleteAllButtonOnResize = function (elementToMove, appendToThisElementDesktop, appendToThisElementMobile) {
    if (!plpComponent.isMobileFiltersOpen) {
        if (isDesktopUp()) {
            if (!elementToMove.closest(appendToThisElementDesktop).length) {
                moveDeleteAllButton(elementToMove, appendToThisElementDesktop);
            }
        } else {
            if (!elementToMove.closest(appendToThisElementMobile).length) {
                moveDeleteAllButton(elementToMove, appendToThisElementMobile);
            }
        }
    }
};

const moveDeleteAllButton = function (elementToMove, appendToThisElement) {
    console.log('elementToMove', elementToMove);
    console.log('appendToThisElement', appendToThisElement);
    elementToMove.appendTo(appendToThisElement);
};

const moveMySelectionContainerOnResize = function (elementToMove, moveAfterElementOnDesktop, moveAfterElementOnMobile) {
    if (!plpComponent.isMobileFiltersOpen) {
        if (isDesktopUp()) {
            if (!moveAfterElementOnDesktop.next().is(elementToMove)) {
                moveMySelectionContainer(elementToMove, moveAfterElementOnDesktop);
            }
        } else {
            if (!moveAfterElementOnMobile.next().is(elementToMove)) {
                moveMySelectionContainer(elementToMove, moveAfterElementOnMobile);
            }
        }
    }
};

const moveMySelectionContainer = function (elementToMove, moveAfterThisElement) {
    elementToMove.insertAfter(moveAfterThisElement);
};

/* Window Scope - Function to remove a filter from a "Chip" */
window.removeFilter = function (idFilter) {
    const $filterItem = $('#' + idFilter);

    $filterItem.trigger('click');
};

/* Dom Ready */
$(function () {
    // VARIABLES

    /* Selector Variables */
    const $nbResultsMobileSticky = $(nbResultsMobileSticky);
    const $filtersContainer = $(filtersContainer);
    const $filtersContainerMobileTitle = $(filtersContainerMobileTitle);
    const $filtersMySelectionContainer = $(filtersMySelectionContainer);
    const $filtersMySelectionDeleteAllButton = $(filtersMySelectionDeleteAllButton);
    const $filterCheckboxes = $(filterCheckboxes);
    const $checkboxesList = $filterCheckboxes.find('.bf-input-checkbox-control');

    /* Value Variables */
    const nbResultsMobileStickyOffsetTop = $nbResultsMobileSticky.offset().top;

    /* Boolean Variables */
    const hasFilterCheckboxes = $filterCheckboxes.length > 0;

    /* Classes */
    const mobileClasses = ['container', 'container-fluid'];

    // EXECUTIONS ON DOM READY

    /* On checkbox status change, add or remove chip */
    if (hasFilterCheckboxes) {
        $checkboxesList.each(function () {
            const $this = $(this);
            $this.on('change', function () {
                toggleChip($this);
            });
        });
    }

    /*
        On mobile resolution, when clicking on the "Filter" button
        to open the filters container, add a "window freeze" to remove
        scrolling outside of filters container.
    */
    $filtersContainer.on('shown.bs.collapse', function (e) {
        if ($(this).is(e.target)) {
            plpComponent.isMobileFiltersOpen = true;
            moveDeleteAllButton($filtersMySelectionDeleteAllButton, filtersMySelectionTitleAndButtonContainer);
            moveMySelectionContainer($filtersMySelectionContainer, $filtersContainerMobileTitle);
            $filtersContainer.find(filtersContainerInner).addClass(mobileClasses);
            _window.freeze();
        }
    });

    /*
        On mobile resolution, when clicking on the "X" button
        in the filters container, remove the "window freeze".
    */
    $filtersContainer.on('hide.bs.collapse', function (e) {
        if ($(this).is(e.target)) {
            plpComponent.isMobileFiltersOpen = false;
            moveDeleteAllButton($filtersMySelectionDeleteAllButton, filterChipsGroup);
            moveMySelectionContainer($filtersMySelectionContainer, $nbResultsMobileSticky);
            $filtersContainer.find(filtersContainerInner).removeClass(mobileClasses);
            _window.unfreeze();
        }
    });

    /*
        On mobile, check the position of the scrollbar in relation to the container
        for the number of results and filter open button. Apply the sticky state or not
        depending of the position of the scrollbar.
    */
    toggleStickyNbResultsAndMobileButton($nbResultsMobileSticky, nbResultsMobileStickyOffsetTop, $filtersContainer);
    $(window).on(
        'scroll',
        throttle(() =>
            toggleStickyNbResultsAndMobileButton(
                $nbResultsMobileSticky,
                nbResultsMobileStickyOffsetTop,
                $filtersContainer
            )
        )
    );

    moveMySelectionContainerOnResize(
        $filtersMySelectionContainer,
        $filtersContainerMobileTitle,
        $nbResultsMobileSticky
    );
    moveDeleteAllButtonOnResize(
        $filtersMySelectionDeleteAllButton,
        filtersMySelectionTitleAndButtonContainer,
        filterChipsGroup
    );
    // Screen Resize Event
    $(window).on(
        'resize',
        throttle(() => {
            moveMySelectionContainerOnResize(
                $filtersMySelectionContainer,
                $filtersContainerMobileTitle,
                $nbResultsMobileSticky
            );
            moveDeleteAllButtonOnResize(
                $filtersMySelectionDeleteAllButton,
                filtersMySelectionTitleAndButtonContainer,
                filterChipsGroup
            );
        })
    );
});
