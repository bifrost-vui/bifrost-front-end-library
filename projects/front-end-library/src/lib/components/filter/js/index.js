import $ from 'jquery';

/* Variables */
const filterItem = '.js-bf-filter';
const filterNbSelections = '.js-bf-filter__nb-selection';
const filterCheckboxes = '.js-bf-filter__checkboxes';
const filterCheckboxesSeeMore = '.js-bf-filter__checkboxes__see-more';
const filterCheckboxesSeeLess = '.js-bf-filter__checkboxes__see-less';

/* Functions */
const updateNumberSelectionsBadge = function ($filterItem, $checkboxesList) {
    const numberOfCheckboxesSelected = $checkboxesList.filter(':checked').length;
    const $nbSelectionsBadge = $filterItem.find(filterNbSelections);
    const $nbSelectionsBadgeText = $nbSelectionsBadge.find('.bf-badge__label__text');

    if (numberOfCheckboxesSelected > 0) {
        $nbSelectionsBadge.removeClass('bf-filter__nb-selection--zero');
    } else {
        $nbSelectionsBadge.addClass('bf-filter__nb-selection--zero');
    }

    $nbSelectionsBadgeText.text(numberOfCheckboxesSelected);
};

const setCheckboxesHeight = function ($filterCheckboxes) {
    // Selector Variables
    const $filterOptions = $filterCheckboxes.find('.bf-input-checkbox-option');

    // Value Variables
    const numberOfCheckboxesToDisplay = $filterCheckboxes.data('nb-checkboxes-display');
    const checkboxesTotalNumber = $filterOptions.length;
    const singleCheckboxHeight = $filterOptions[0].offsetHeight;
    const checkboxesContainerCssGapValue = parseInt(
        $filterCheckboxes.find('.bf-input-checkbox__options').css('gap'),
        10
    );

    if (checkboxesTotalNumber > 8) {
        $filterCheckboxes.css({
            '--filterCheckboxesMinHeight':
                numberOfCheckboxesToDisplay * (singleCheckboxHeight + checkboxesContainerCssGapValue) + 'px',
            '--filterCheckboxesMaxHeight':
                checkboxesTotalNumber * (singleCheckboxHeight + checkboxesContainerCssGapValue) + 'px',
        });
        $filterCheckboxes.addClass('loaded');
    }
};

/* Dom Ready */
$(function () {
    const $filterItems = $(filterItem);

    $filterItems.each(function () {
        /* Selector Variables */
        const $filterItem = $(this);
        const $filterCheckboxes = $filterItem.find(filterCheckboxes);
        const $checkboxesList = $filterCheckboxes.find('.bf-input-checkbox-control');
        const $seeMoreButton = $filterItem.find(filterCheckboxesSeeMore);
        const $seeLessButton = $filterItem.find(filterCheckboxesSeeLess);

        /* Boolean Variables */
        const hasFilterCheckboxes = $filterCheckboxes.length > 0;

        if (hasFilterCheckboxes) {
            /* Initial execution */
            updateNumberSelectionsBadge($filterItem, $checkboxesList);
            setCheckboxesHeight($filterCheckboxes);

            /* On checkbox status change, update the number of selections badge */
            $checkboxesList.each(function () {
                $(this).on('change', function () {
                    updateNumberSelectionsBadge($filterItem, $checkboxesList);
                });
            });

            /* Add events on checkboxes height toggle */
            $seeMoreButton.on('click', function () {
                $seeMoreButton.addClass('d-none');
                $seeLessButton.removeClass('d-none');
                $filterCheckboxes.addClass('expanded');
            });
            $seeLessButton.on('click', function () {
                $seeMoreButton.removeClass('d-none');
                $seeLessButton.addClass('d-none');
                $filterCheckboxes.removeClass('expanded');
            });
        }
    });
});
