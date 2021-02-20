import {breakpoints} from '../utils/breakpoints';
import $ from 'jquery';

$(function () {

  const setBgImages = () => {
    document.querySelectorAll(".js-image-background, .bg-image").forEach((elem) => {
      let url = elem.dataset.bg;

      if ($(window).width() >= breakpoints.lg) {
        url = elem.dataset.lgBg;
      }
      else if ($(window).width() >= breakpoints.md) {
        url = elem.dataset.mdBg;
      }

      elem.style.backgroundImage = `url(${url})`;
    })
  };

  setBgImages();
  $(window).on('resize', setBgImages);
});
