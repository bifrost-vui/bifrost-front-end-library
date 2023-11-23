import $ from 'jquery';

/* Variables */
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

window.removeFilter = function (idFilter) {
    const $filterItem = $('#' + idFilter);

    $filterItem.trigger('click');
    console.log('$filterItem.prop("checked")', $filterItem.prop('checked'));
};

/* Dom Ready */
$(function () {
    /* Selector Variables */
    const $filterCheckboxes = $(filterCheckboxes);
    const $checkboxesList = $filterCheckboxes.find('.bf-input-checkbox-control');

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
});
