import $ from 'jquery';

// Selector Variables
const bfTooltip = '.js-bf-tooltip';

/* Dom Ready */
$(function () {
    $(bfTooltip).tooltip();

    $(bfTooltip).on('shown.bs.tooltip', function () {
        console.log('tooltip shown');
    });
});
