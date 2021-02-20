import $ from 'jquery';

$(function () {
  $('.js-timepicker-option').click(function() {
    const parentContainer = $(this).closest('.timepicker-appointment');
    const parentLegend = $(this).closest('.timepicker-fieldset');

    $(parentContainer).add('fieldset.selected').removeClass('selected');
    $(parentLegend).toggleClass('selected');

    console.log("click");
  });

  $('.js-timepicker-modal').click(function(e) {
    $('input:radio[name=appointment-date-time]:checked').prop('checked', false);
  });
});