import $ from 'jquery';

$(function () {
    // collapse banner
    setTimeout(function () {
        $('.js-DEMO-collapse-banner').collapse();
    }, 2000);
    setTimeout(function () {
        $('.js-DEMO-collapse-banner').collapse('hide');
    }, 5000);

    // show confirm button on selectlist option click
    $('.js-DEMO-custom-select', '.js-tooltip-custom').on('change', function () {
        const selectValue = $(this).val();
        const btnConfirm = $(this).parents('.js-tooltip-custom').find('.js-tooltip-custom__confirm-btn');

        btnConfirm.hide();

        if (selectValue != '-') {
            btnConfirm.fadeIn();
        }
    });

    // Modal terms and condition
    // -----------------------------------------------
    $('.js-DEMO-modal-agree-conditions__legal-text').on('scroll', function () {
        if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
            $('.js-DEMO-modal-agree-conditions__checkbox-agree').removeClass('vui--desactivated');
        }
    });

    $('input[type="checkbox"]', '.js-DEMO-modal-agree-conditions__checkbox-agree').on('click', function (e) {
        if ($(this).is(':checked')) {
            $('.js-DEMO-modal-agree-conditions__btn-confirm').removeClass('disabled');
        } else {
            $('.js-DEMO-modal-agree-conditions__btn-confirm').addClass('disabled');
        }
    });

    // No checkbox version
    $('.js-DEMO-modal-agree-conditions__legal-text-no-checkbox').on('scroll', function () {
        if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
            $('.js-DEMO-modal-agree-conditions__btn-confirm').removeClass('disabled');
        }
    });
});
