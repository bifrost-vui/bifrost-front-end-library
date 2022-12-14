import $ from 'jquery';

$(function () {
    $('.js-DEMO-add-item-cart-summary').on('click', function () {
        $(this).addClass('disabled');
        $('.js-DEMO-collapse-alert-bar').collapse();
        setTimeout(function () {
            $('.js-DEMO-collapse-alert-bar').collapse('hide');
        }, 5000);
    });
});
