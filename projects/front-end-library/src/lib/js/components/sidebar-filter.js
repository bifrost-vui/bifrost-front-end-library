import { breakpoints } from '../utils/breakpoints';
import $ from 'jquery';

$(function () {
    if ($(window).width() <= breakpoints.md) {
        $('.js-sidebar-filter__content').css('display', 'none');

        $('.js-sidebar-filter__title').on('click', function () {
            $('.js-sidebar-filter__content').slideToggle();
        });
    }
});
