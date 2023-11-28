import $ from 'jquery';
import { _window, currentWindowScroll } from '../../../js/utils/window';
import { throttle } from '../../../js/utils/debounce-throttle';

/* Variables */
const nbResultsMobileSticky = '.js-bf-plp-nb-results-mobile-sticky';
const filtersButtonOpen = '.js-bf-plp-filters-button-open';
const filtersButtonClose = '.js-bf-plp-filters-button-close';
const filtersContainer = '#plpFiltersContainer';
const filtersContainerMobile = '.js-bf-plp-filters-container-mobile';
const filterChipsGroup = '.js-bf-plp-filters-container-chips-group';
const filterCheckboxes = '.js-bf-filter__checkboxes';

/* Functions */
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

/* Window Scope - Function to remove a filter from a "Chip" */
window.removeFilter = function (idFilter) {
    const $filterItem = $('#' + idFilter);

    $filterItem.trigger('click');
};

/* Dom Ready */
$(function () {
    /* Selector Variables */
    const $nbResultsMobileSticky = $(nbResultsMobileSticky);
    const $filtersContainer = $(filtersContainer);
    const $filtersButtonOpen = $(filtersButtonOpen);
    const $filtersButtonClose = $(filtersButtonClose);
    const $filterCheckboxes = $(filterCheckboxes);
    const $checkboxesList = $filterCheckboxes.find('.bf-input-checkbox-control');

    /* Value Variables */
    const nbResultsMobileStickyOffsetTop = $nbResultsMobileSticky.offset().top;

    /* Boolean Variables */
    const hasFilterCheckboxes = $filterCheckboxes.length > 0;

    if (hasFilterCheckboxes) {
        /* On checkbox status change, add or remove chip */
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
    $filtersContainer.on('shown.bs.collapse', function () {
        $filtersContainer.find(filtersContainerMobile).addClass(['container', 'container-fluid']);
        _window.freeze();
    });

    /*
        On mobile resolution, when clicking on the "X" button
        in the filters container, remove the "window freeze".
    */
    $filtersContainer.on('hide.bs.collapse', function () {
        $filtersContainer.find(filtersContainerMobile).removeClass(['container', 'container-fluid']);
        _window.unfreeze();
    });

    /*
        On mobile, init the
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
});
