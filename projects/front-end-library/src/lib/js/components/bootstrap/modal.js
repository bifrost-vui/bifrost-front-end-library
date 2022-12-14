import { _window } from '../../utils/window';
import $ from 'jquery';

$(function () {
    // Generique Bootstrap modal events
    // ------------------------------------------------------
    $('.modal').on('show.bs.modal', function (e) {
        $('body').addClass('modal-open');
        $('[data-toggle="tooltip"]').tooltip();
        _window.freeze();
    });

    $('.modal').on('hidden.bs.modal', function (e) {
        _window.unfreeze();
    });

    // Unable to focus on other things other than the modal (ex. gensys livechat)
    $('.modal').on('shown.bs.modal', function () {
        $(document).off('focusin.modal');

        // Reset slick carousel
        $(this).find('.slick-slider').slick('setPosition');
    });

    // Custom events
    // ------------------------------------------------------
    $('.js-modal-toggle-target').on('click', function (e) {
        e.preventDefault();

        const targetModal = $(this).data('target');
        $(targetModal).modal('show');

        $(this).parents('.modal').modal('hide');
    });

    $('.js-modal-video').each(function () {
        var modal = $(this),
            modalIframeCtnr = modal.find('.js-video-container'),
            modalIframe = modal.find('.js-video');

        // Empty it when closing.
        modal.on('hide.bs.modal', function (e) {
            modalIframeCtnr.empty().prepend(modalIframe);
        });
    });
});
