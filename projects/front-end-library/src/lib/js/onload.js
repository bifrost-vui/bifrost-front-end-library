import $ from 'jquery';
import 'pickerdate';
import { initIncrementInputs } from './components/input-increment';
import { tooltips } from './components/vui-tooltips';
import { animation } from './components/animation';
import { stickyBottomBar } from './components/sticky-bottom';

$(function () {
    $('html').addClass('loaded-end');
    $('[data-toggle="tooltip"]').tooltip();

    // setup Increment btn
    initIncrementInputs();

    // setup Tooltips
    // initTooltips();
    tooltips.init('js-tooltip-custom');
    tooltips.init('js-tooltip-hover', {
        isModeHover: true,
    });

    // trigger animation
    animation.triggerAnimInViewport();
    window.addEventListener('scroll', animation.triggerAnimInViewport, false);

    // setup datepicker
    $('.js-datepicker').pickadate({
        min: true,
        disable: [new Date(2018, 7, 18)],
        today: '',
        clear: '',
        close: 'Close',
    });

    // init stickybar
    stickyBottomBar.init();

    // Appointment carousel setup
    setTimeout(() => {
        $('.js-slick-carousel--appointment', this).slick('resize');
        $('.js-slick-fade-on-collapse', this).fadeTo(300, 1);
        animation.triggerAnimInViewport();
    }, 300);
});
