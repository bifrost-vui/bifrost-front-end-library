import $ from 'jquery';

window.onload = function () {
    setTimeout(function() {$('.cx-sidebar-button').on('click', function (e) {
        setTimeout(function () {
            $('.cx-form-inputs tr').each(function(){
                if($(this).is(":visible")) {
                  $(this).find('input').focus();
                  return false;
                }
            });
        }, 250);
    });}, 500);
};