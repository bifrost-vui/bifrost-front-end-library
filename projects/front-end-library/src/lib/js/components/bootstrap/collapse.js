import $ from 'jquery';
import {animation} from "../animation";
import {_window} from '../../utils/window';

$(function () {
  $('.js-slick-fade-on-collapse').css('opacity', 0);

  $('.collapse').on('shown.bs.collapse hidden.bs.collapse', function (e) {
    $('.slick-slider', this).slick('resize');

    setTimeout(() => {
      $('.js-slick-fade-on-collapse', this).fadeTo(300, 1);
      animation.triggerAnimInViewport();
    }, 300);
  });

  $('.js-collapse-full-height').on('shown.bs.collapse', function (e) {
    e.stopPropagation();
    $(this).parents('.navbar').addClass('fixed-top');
    _window.freeze();
  });

  $('.js-collapse-full-height').on('hidden.bs.collapse', function (e) {
    e.stopPropagation();
    $(this).parents('.navbar').removeClass('fixed-top');
    _window.unfreeze();
  });

  $('.card.accordion-item--arrow-down .collapse').on('hidden.bs.collapse', function (e) {
    animation.triggerAnimInViewport();
  });
});
