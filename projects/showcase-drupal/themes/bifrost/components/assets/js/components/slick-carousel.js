import {breakpoints} from '../utils/breakpoints';
import 'slick-carousel';
import $ from 'jquery';

$(function () {
  const assignSlickCarousel = (slickTarget = ".js-slick", slickParams = {}) => {
    $(slickTarget).each(function (i, elem) {
      const slickData = $(elem).data('slick') || {};
      const mergeSlickData = Object.assign(slickParams, slickData);
      $(elem).slick(mergeSlickData);
    });
  };

  $('.js-slick-next').on('click', function () { $(this).parents('.slick-slider').slick('slickNext'); });
  $('.js-slick-prev').on('click', function () { $(this).parents('.slick-slider').slick('slickPrev'); });



  const getPrevSlickBtn = () => {
    const lang = $('html').attr('lang');
    const token = (lang === 'en') ? 'Previous' : 'Précédent';

    return `<button class="slick-prev" aria-label="${token}" type="button">${token}</button>`;
  };
  const getNextSlickBtn = () => {
    const lang = $('html').attr('lang');
    const token = (lang === 'en') ? 'Next' : 'Suivant';

    return `<button class="slick-next" aria-label="${token}" type="button">${token}</button>`;
  };

  // -------------------------------------------------------------
  // Definition of each carousel
  // -------------------------------------------------------------
  assignSlickCarousel('.js-slick-carousel--overflow-visible', {
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    prevArrow: getPrevSlickBtn(),
    nextArrow: getNextSlickBtn(),
    responsive: [
      {
        breakpoint: (breakpoints.md-1),
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: breakpoints.lg,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  assignSlickCarousel('.js-slick-carousel--overview-visible-sm', {
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: getPrevSlickBtn(),
    nextArrow: getNextSlickBtn(),
    responsive: [
      {
        breakpoint: breakpoints.md,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });

  // Only on mobile carousel
  assignSlickCarousel('.js-slick-carousel--only-mobile', {
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    centerMode: true,
    dots: true,
    prevArrow: getPrevSlickBtn(),
    nextArrow: getNextSlickBtn(),
    responsive: [
      {
        breakpoint: breakpoints.md,
        settings: "unslick"
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
    });

  assignSlickCarousel('.js-slick-carousel--simulator', {
    infinite: false,
    arrows: false,
    centerMode: true,
    variableWidth: true,
    centerPadding: '3rem',
    dots: true,
    focusOnSelect: true,
    prevArrow: getPrevSlickBtn(),
    nextArrow: getNextSlickBtn(),
    responsive: [
      {
        breakpoint: breakpoints.md,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
        }
      },
      {
        breakpoint: breakpoints.sm,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
        }
      }
    ]
  });

  // Image gallery version
  assignSlickCarousel('.js-slick-carousel--img-gallery', {
    centerMode: true,
    dots: true,
    mobileFirst: true,
    centerPadding: 0,
    prevArrow: getPrevSlickBtn(),
    nextArrow: getNextSlickBtn(),
  });

  // Image equipment version
  assignSlickCarousel('.js-slick-carousel--img-equipment-selection', {
    fade: true,
    arrows: false,
    infinite: false,
    prevArrow: getPrevSlickBtn(),
    nextArrow: getNextSlickBtn(),
    slidesToShow: 1,
    slidesToScroll: 1
  });

  // Calendar appointment
  assignSlickCarousel('.js-slick-carousel--appointment', {
    infinite: false,
    arrows:true,
    prevArrow: getPrevSlickBtn(),
    nextArrow: getNextSlickBtn(),
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [
      {
        breakpoint: breakpoints.md,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  });

  // Channel Discover
  assignSlickCarousel('.js-slick-carousel--channel-discover', {
    arrows:true,
    centerMode: true,
    centerPadding: '7rem',
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: getPrevSlickBtn(),
    nextArrow: getNextSlickBtn(),
    responsive: [
      {
        breakpoint: breakpoints.md,
        settings: {
          arrows: false,
          slidesToShow: 1,
        }
      },
      {
        breakpoint: breakpoints.sm,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerPadding: '3rem',
        }
      },
    ]
  });

  // Internet Speed Item
  assignSlickCarousel('.js-slick-carousel--internet-speed', {
    arrows:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    prevArrow: getPrevSlickBtn(),
    nextArrow: getNextSlickBtn(),
    responsive: [
      {
        breakpoint: breakpoints.lg,
        settings: {
          arrows: false,
          slidesToShow: 3,
        }
      },
      {
        breakpoint: breakpoints.md,
        settings: {
          centerMode: true,
          arrows: false,
          slidesToShow: 1,
        }
      },
    ]
  });


  // Channel Discover
  assignSlickCarousel('.js-slick-carousel--dots-and-arrows', {
    arrows:true,
    infinite: false,
    dots: true,
    // centerMode: true,
    centerPadding: '2rem',
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: getPrevSlickBtn(),
    nextArrow: getNextSlickBtn(),
    responsive: [
      {
        breakpoint: breakpoints.md,
        settings: {
          arrows: false,
          slidesToShow: 1,
        }
      },
      {
        breakpoint: breakpoints.sm,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '3rem',
        }
      },
    ]
  });
});
