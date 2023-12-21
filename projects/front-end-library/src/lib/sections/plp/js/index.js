import $ from 'jquery';
import { _window, currentWindowScroll } from '../../../js/utils/window';
import { cleanString } from '../../../js/utils/string-format';
import { throttle } from '../../../js/utils/debounce-throttle';
import { isDesktopUp } from '../../../js/utils/breakpoints';

/* VARIABLES */
const bfPlp = '.js-bf-plp';
const nbResultsContainer = '.js-bf-plp-nb-results-container';
const nbResultsNumberString = '.js-bf-plp-nb-results-number-string';
const nbResultsTextSingularString = '.js-bf-plp-nb-results-text-singular-string';
const nbResultsTextPluralString = '.js-bf-plp-nb-results-text-plural-string';
const filtersContainer = '#plpFiltersContainer';
const filtersContainerInner = '.js-bf-plp-filters-container-inner';
const filtersContainerButtonClearAll = '.js-bf-plp-filters-container-button-clear-all';
const filtersContainerMobileTitle = '.js-bf-plp-filters-container-mobile-title';
const filtersMySelectionContainer = '.js-bf-plp-filters-container-my-selection';
const filtersMySelectionTitleAndButtonContainer = '.js-bf-plp-my-selection-title-and-button-container';
const filtersMySelectionClearAllButton = '.js-bf-plp-filters-my-selection-clear-all-button';
const filterMySelectionChipsGroup = '.js-bf-plp-filters-container-my-selection-chips-group';
const filterMySelectionEmptyMessage = '.js-bf-plp-filters-container-my-selection-empty-message';
const filtersChips = '.js-bf-plp-filters-chip';
const filterCheckboxes = '.js-bf-filter__checkboxes';
const resultsList = '.js-bf-plp-results-list';
const noResultMessage = '.js-bf-plp-results-empty';
const viewMoreButton = '#plpViewMoreButton';

let plpComponent = {
    hasSelectedFilter: false,
    isMobileFiltersOpen: false,
};

/* FUNCTIONS */

/**
 * Check the number of selected filters and display or hide the chips group
 * or the empty message depending of the case.
 */
const checkNumberSelectedFilters = function () {
    const $checkboxElements = $(filterCheckboxes).find('.bf-input-checkbox-control');
    const $chipsGroupEl = $(filterMySelectionChipsGroup);
    const $emptyMessageEl = $(filterMySelectionEmptyMessage);
    const $filtersMySelectionClearAllButton = $(filtersMySelectionClearAllButton);

    if ($checkboxElements.filter(':checked').length > 0) {
        plpComponent.hasSelectedFilter = true;
        $chipsGroupEl.removeClass('d-none');
        $emptyMessageEl.addClass('d-none');
        $filtersMySelectionClearAllButton.removeClass('d-none');
    } else {
        plpComponent.hasSelectedFilter = false;
        $chipsGroupEl.addClass('d-none');
        $emptyMessageEl.removeClass('d-none');
        $filtersMySelectionClearAllButton.addClass('d-none');
    }
};

/**
 * On a status change on a filter's checkbox element, add or delete corresponding Chip
 * @param {jQuery} checkboxEl - Filter's checkbox element
 */
const toggleChip = function (checkboxEl) {
    const checkboxId = checkboxEl.attr('id');
    const checkboxLabel = checkboxEl.next().find('span:last-child').text();
    const isChecked = checkboxEl.prop('checked');

    if (isChecked) {
        // ADD NEW CHIP

        // Get Chip template element
        const $chipTemplateSource = $('.js-bf-filters-chip-template');

        // Clone template and adjust its attributes with checkbox's data
        let chipTemplate = $chipTemplateSource.clone();
        chipTemplate.attr('id', checkboxId + '_chip');
        chipTemplate.find('.bf-chip__label').text(checkboxLabel);
        chipTemplate.find('.bf-chip__button').attr('onclick', "removeFilter('" + checkboxId + "')");
        chipTemplate.removeClass(['d-none', 'bf-chip--disabled', 'js-bf-filters-chip-template']);
        chipTemplate.addClass(['js-bf-plp-filters-chip']);
        chipTemplate.find('.bf-chip__button').attr('disabled', false);

        // Append new chip inside Chips Group
        chipTemplate.appendTo(filterMySelectionChipsGroup);
    } else {
        // REMOVE CHIP
        $('#' + checkboxId + '_chip').remove();
    }

    // Check the number of selected filters
    checkNumberSelectedFilters();
};

/**
 * When not on desktop resolution, after scrolling to the container of the number of results text, it becomes "sticky"
 * and stay visible at the top of the page until the user scroll back up above its starting position.
 * @param {jQuery} nbResultsContainerEl - Container element that contains the number of results text and also the button to open the filters
 * @param {number} elemOffsetTopValue - Pixel value of the distance between the top of the page and the container's starting position (before being sticky)
 * @param {jQuery} filtersContainerEl - Filters container element
 */
const toggleNbResultsContainerStickyState = function (nbResultsContainerEl, elemOffsetTopValue, filtersContainerEl) {
    // Check if filter's container already has "collapse" class
    const hasFiltersContainerCollapseClass = filtersContainerEl.hasClass('collapse');

    // Get padding value when container is sticky
    const paddingRemValueWhenSticky = Number(cleanString(nbResultsContainerEl.css('--padding-when-sticky'), 'rem'));
    const paddingPxValueWhenSticky = paddingRemValueWhenSticky * 16;

    if (currentWindowScroll.top >= elemOffsetTopValue - paddingPxValueWhenSticky) {
        // Add class to make container sticky
        nbResultsContainerEl.addClass('sticky');
    } else {
        // If container has "sticky" class, remove it
        if (hasFiltersContainerCollapseClass) {
            nbResultsContainerEl.removeClass('sticky');
        }
    }
};

/**
 * Depending if filters container is NOT opened and if the user is on desktop
 * resolution or not, move the "Clear all" button from one place to another one
 * @param {jQuery} clearAllButtonEl - "Clear all" button element
 * @param {string} appendToThisElementDesktop - Selector of the element where to append the button on desktop resolution
 * @param {string} appendToThisElementMobile - Selector of the element where to append the button when not on desktop resolution
 */
const moveClearAllButtonOnResize = function (clearAllButtonEl, appendToThisElementDesktop, appendToThisElementMobile) {
    // Process only if the filters container (via the button on mobile view) is NOT opened
    if (!plpComponent.isMobileFiltersOpen) {
        // If the window is being resized to desktop resolution and over
        if (isDesktopUp()) {
            // If the "Clear all" button element is NOT already inside the element where it needs to be appended into
            if (!clearAllButtonEl.closest(appendToThisElementDesktop).length) {
                moveClearAllButton(clearAllButtonEl, appendToThisElementDesktop);
            }
        }
        // If the window is being resized below desktop resolution
        else {
            // If the "Clear all" button element is NOT already inside the element where it needs to be appended into
            if (!clearAllButtonEl.closest(appendToThisElementMobile).length) {
                moveClearAllButton(clearAllButtonEl, appendToThisElementMobile);
            }
        }
    }
};

/**
 * Move the "Clear all" button from one place to another one
 * @param {jQuery} clearAllButtonEl - "Clear all" button element
 * @param {string} appendToThisElement - Selector of the element where to append the button
 */
const moveClearAllButton = function (clearAllButtonEl, appendToThisElement) {
    clearAllButtonEl.appendTo(appendToThisElement);
};

/**
 * Depending if filters container is NOT opened and if the user is on desktop
 * resolution or not, move "My Selection" container from one place to another one
 * @param {jQuery} mySelectionContainerEl - "My Selection" container element
 * @param {jQuery} moveAfterElementOnDesktop - Element where the container will be inserted after on desktop resolution
 * @param {jQuery} moveAfterElementOnMobile - Element where the container will be inserted after when not on desktop resolution
 */
const moveMySelectionContainerOnResize = function (
    mySelectionContainerEl,
    moveAfterElementOnDesktop,
    moveAfterElementOnMobile
) {
    // Process only if the filters container (via the button on mobile view) is NOT opened
    if (!plpComponent.isMobileFiltersOpen) {
        // If the window is being resized to desktop resolution and over
        if (isDesktopUp()) {
            // If "My Selection" container element is NOT already next to the element where it needs to be inserted next to
            if (!moveAfterElementOnDesktop.next().is(mySelectionContainerEl)) {
                moveMySelectionContainer(mySelectionContainerEl, moveAfterElementOnDesktop);
            }
        }
        // If the window is being resized below desktop resolution
        else {
            // If "My Selection" container element is NOT already next to the element where it needs to be inserted next to
            if (!moveAfterElementOnMobile.next().is(mySelectionContainerEl)) {
                moveMySelectionContainer(mySelectionContainerEl, moveAfterElementOnMobile);
            }
        }
    }
};

/**
 * Move "My Selection" container from one place to another one
 * @param {jQuery} mySelectionContainerEl - "My Selection" container element
 * @param {string} moveAfterThisElement - Element where the container will be inserted after
 */
const moveMySelectionContainer = function (mySelectionContainerEl, moveAfterThisElement) {
    mySelectionContainerEl.insertAfter(moveAfterThisElement);
};

/**
 * Depending if filters container is opened and if the user is on desktop
 * resolution or not, "freeze" or "unfreeze" the page depending on the case
 */
const toggleFreezeWindowOnResize = function () {
    // Process only if the filters container (via the button on mobile view) is opened
    if (plpComponent.isMobileFiltersOpen) {
        // If the window is being resized to desktop resolution and over
        if (isDesktopUp()) {
            // If the page is freezed (".js-vui--window-freeze" class on the <body> element)
            if (_window.isFreezed) {
                _window.unfreeze();
            }
        }
        // If the window is being resized below desktop resolution
        else {
            // If the page is NOT freezed (normal behavior)
            if (!_window.isFreezed) {
                _window.freeze();
            }
        }
    }
};

/**
 * Trigger a click on all Chip's delete (x) button
 */
const clearAllFilters = function () {
    const $filtersChipsDeleteButton = $(filtersChips).find('.bf-chip__button:not([disabled])');
    $filtersChipsDeleteButton.each(function () {
        $(this).trigger('click');
    });
};

/**
 * Toggle classes on ".js-bf-plp-filters-container-inner" depending of the screen resolution
 *
 * @param {jQuery} $filtersContainer - Filters container element
 */
const toggleFiltersContainerInnerClassesOnResize = function ($filtersContainer) {
    /* Classes */
    const mobileClasses = ['container', 'container-fluid'];

    // If the window is being resized to desktop resolution and over
    if (isDesktopUp()) {
        $filtersContainer.find(filtersContainerInner).removeClass(mobileClasses);
    }
    // If the window is being resized below desktop resolution
    else {
        $filtersContainer.find(filtersContainerInner).addClass(mobileClasses);
    }
};

/**
 * Window Scope
 * Check the number of result that are not hidden, then it display the results or
 * the "no result" message. Also, it updates the text showing the number of results
 * above the filters column.
 */
window.checkNumberOfResults = function () {
    /* Selector Variables */
    const $resultsList = $(resultsList);
    const $noResultMessage = $(noResultMessage);
    const $nbResultsNumberString = $(nbResultsNumberString);
    const $nbResultsTextSingularString = $(nbResultsTextSingularString);
    const $nbResultsTextPluralString = $(nbResultsTextPluralString);
    const $cards = $resultsList.find('.bf-card:not(.d-none)');
    const $cardsNotLoading = $cards.filter(':not(.bf-card--loading)');
    const $viewMoreButton = $(viewMoreButton);

    /* Value Variables */
    const cardsTotalCount = $cards.length;
    const cardsNotLoadingTotalCount = $cardsNotLoading.length;

    // Display the results or the "no result" message depending of the number of results
    if (cardsTotalCount > 0) {
        $resultsList.removeClass('d-none');
        $noResultMessage.addClass('d-none');
        $viewMoreButton.removeClass('d-none');
    } else {
        $resultsList.addClass('d-none');
        $noResultMessage.removeClass('d-none');
        $viewMoreButton.addClass('d-none');
    }

    // Update the number of result string with the actual count
    $nbResultsNumberString.text(cardsNotLoadingTotalCount + ' '); // The space has to be added here -- DO NOT REMOVE

    // If there is more than one result, display the plural text, else show the singular text
    if (cardsNotLoadingTotalCount > 1) {
        $nbResultsTextPluralString.removeClass('d-none');
        $nbResultsTextSingularString.addClass('d-none');
    } else {
        $nbResultsTextPluralString.addClass('d-none');
        $nbResultsTextSingularString.removeClass('d-none');
    }
};

/**
 * Window Scope - Function to remove a filter from a "Chip"
 * @param {string} idFilter - Id selector of a filter checkbox
 */
window.removeFilter = function (idFilter) {
    const $filterItem = $('#' + idFilter);
    $filterItem.trigger('click');
};

/* Dom Ready */
$(function () {
    // VARIABLES

    /* Selector Variables */
    const $bfPlp = $(bfPlp);
    const $nbResultsContainer = $(nbResultsContainer);
    const $filtersContainer = $(filtersContainer);
    const $filtersContainerMobileTitle = $(filtersContainerMobileTitle);
    const $filtersMySelectionContainer = $(filtersMySelectionContainer);
    const $filtersMySelectionClearAllButton = $(filtersMySelectionClearAllButton);
    const $filterCheckboxes = $(filterCheckboxes);
    const $checkboxesList = $filterCheckboxes.find('.bf-input-checkbox-control');

    /* Value Variables */
    const nbResultsContainerOffsetTop = $nbResultsContainer.offset().top;

    /* Boolean Variables */
    const hasFilterCheckboxes = $filterCheckboxes.length > 0;

    // EXECUTIONS ON DOM READY

    /* Check number of selected filters and display or not the chips group of the empty message */
    checkNumberSelectedFilters();

    /* On checkbox status change, add or remove chip */
    if (hasFilterCheckboxes) {
        // Add event listeners on checkbox filters
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
            moveClearAllButton($filtersMySelectionClearAllButton, filtersMySelectionTitleAndButtonContainer);
            moveMySelectionContainer($filtersMySelectionContainer, $filtersContainerMobileTitle);
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
            moveClearAllButton($filtersMySelectionClearAllButton, filterMySelectionChipsGroup);
            moveMySelectionContainer($filtersMySelectionContainer, $nbResultsContainer);
            _window.unfreeze();
        }
    });

    /*
        On mobile, check the position of the scrollbar in relation to the container
        for the number of results and filter open button. Apply the sticky state or not
        depending of the position of the scrollbar.
    */
    toggleNbResultsContainerStickyState($nbResultsContainer, nbResultsContainerOffsetTop, $filtersContainer);
    $(window).on(
        'scroll',
        throttle(() =>
            toggleNbResultsContainerStickyState($nbResultsContainer, nbResultsContainerOffsetTop, $filtersContainer)
        )
    );

    // On DOM loaded, execute a single time the functions that will also be executed on browser window resize
    moveMySelectionContainerOnResize($filtersMySelectionContainer, $filtersContainerMobileTitle, $nbResultsContainer);
    moveClearAllButtonOnResize(
        $filtersMySelectionClearAllButton,
        filtersMySelectionTitleAndButtonContainer,
        filterMySelectionChipsGroup
    );
    toggleFiltersContainerInnerClassesOnResize($filtersContainer);
    toggleFreezeWindowOnResize();

    // Browser Window Resize Event
    $(window).on(
        'resize',
        throttle(() => {
            moveMySelectionContainerOnResize(
                $filtersMySelectionContainer,
                $filtersContainerMobileTitle,
                $nbResultsContainer
            );
            moveClearAllButtonOnResize(
                $filtersMySelectionClearAllButton,
                filtersMySelectionTitleAndButtonContainer,
                filterMySelectionChipsGroup
            );
            toggleFiltersContainerInnerClassesOnResize($filtersContainer);
            toggleFreezeWindowOnResize();
        })
    );

    // On click on either "Clear all" button, it will remove all selected filters
    $bfPlp.on('click', `${filtersMySelectionClearAllButton}, ${filtersContainerButtonClearAll}`, () => {
        clearAllFilters();
    });

    // Check the number of result, then display or not the "no result" message
    // and also update the text showing the number of results
    window.checkNumberOfResults();
});
