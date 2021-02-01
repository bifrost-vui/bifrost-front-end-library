import $ from 'jquery';

$(function () {
  $('.js-timepicker-option').click(function() {

    const parentContainer = $(this).closest('.timepicker-appointment');
    const parentLegend = $(this).closest('.timepicker-fieldset');

    $(parentContainer).add('fieldset.selected').removeClass('selected');
    $(parentLegend).toggleClass('selected');
  })
});