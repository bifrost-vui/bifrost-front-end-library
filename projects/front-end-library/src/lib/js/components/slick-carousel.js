import { breakpoints } from '../utils/breakpoints';
import 'slick-carousel';
import $ from 'jquery';

// Define global variable
window.bfSlick = {
    getPrevSlickBtn: () => {
        const lang = $('html').attr('lang');
        const token = lang === 'en' ? 'Previous' : 'Précédent';
        return `<button class="slick-prev" aria-label="${token}" type="button">${token}</button>`;
    },

    getNextSlickBtn: () => {
        const lang = $('html').attr('lang');
        const token = lang === 'en' ? 'Next' : 'Suivant';
        return `<button class="slick-next" aria-label="${token}" type="button">${token}</button>`;
    },

    assignCarousel: (slickTarget = '.js-slick', slickParams = {}) => {
        $(slickTarget).each(function (i, elem) {
            const slickData = $(elem).data('slick') || {};
            const mergeSlickData = Object.assign(slickParams, slickData);
            $(elem).slick(mergeSlickData);
        });
    },
};

$(function () {
    $('.js-slick-next').on('click', function () {
        $(this).parents('.slick-slider').slick('slickNext');
    });
    $('.js-slick-prev').on('click', function () {
        $(this).parents('.slick-slider').slick('slickPrev');
    });

    // -------------------------------------------------------------
    // Definition of each carousel
    // -------------------------------------------------------------
    bfSlick.assignCarousel('.js-slick-carousel--overflow-visible', {
        arrows: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        prevArrow: bfSlick.getPrevSlickBtn(),
        nextArrow: bfSlick.getNextSlickBtn(),
        responsive: [
            {
                breakpoint: breakpoints.md - 1,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: breakpoints.lg,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });

    bfSlick.assignCarousel('.js-slick-carousel--overview-visible-sm', {
        arrows: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: bfSlick.getPrevSlickBtn(),
        nextArrow: bfSlick.getNextSlickBtn(),
        responsive: [
            {
                breakpoint: breakpoints.md,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    // Only on mobile carousel
    bfSlick.assignCarousel('.js-slick-carousel--only-mobile', {
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        centerMode: true,
        dots: true,
        prevArrow: bfSlick.getPrevSlickBtn(),
        nextArrow: bfSlick.getNextSlickBtn(),
        responsive: [
            {
                breakpoint: breakpoints.md,
                settings: 'unslick',
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });

    bfSlick.assignCarousel('.js-slick-carousel--simulator', {
        infinite: false,
        arrows: false,
        centerMode: true,
        variableWidth: true,
        centerPadding: '3rem',
        dots: true,
        focusOnSelect: true,
        prevArrow: bfSlick.getPrevSlickBtn(),
        nextArrow: bfSlick.getNextSlickBtn(),
        responsive: [
            {
                breakpoint: breakpoints.md,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: breakpoints.sm,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                },
            },
        ],
    });

    // Image gallery version
    bfSlick.assignCarousel('.js-slick-carousel--img-gallery', {
        accessibility: false,
        centerMode: true,
        dots: true,
        mobileFirst: true,
        centerPadding: 0,
        prevArrow: bfSlick.getPrevSlickBtn(),
        nextArrow: bfSlick.getNextSlickBtn(),
    });

    // Image equipment version
    bfSlick.assignCarousel('.js-slick-carousel--img-equipment-selection', {
        fade: true,
        arrows: false,
        infinite: false,
        prevArrow: bfSlick.getPrevSlickBtn(),
        nextArrow: bfSlick.getNextSlickBtn(),
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    // Calendar appointment
    bfSlick.assignCarousel('.js-slick-carousel--appointment', {
        infinite: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: bfSlick.getPrevSlickBtn(),
        nextArrow: bfSlick.getNextSlickBtn(),
        responsive: [
            {
                breakpoint: breakpoints.md,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: breakpoints.sm,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
        ],
    });

    // Channel Discover
    bfSlick.assignCarousel('.js-slick-carousel--channel-discover', {
        arrows: true,
        centerMode: true,
        centerPadding: '7rem',
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: bfSlick.getPrevSlickBtn(),
        nextArrow: bfSlick.getNextSlickBtn(),
        responsive: [
            {
                breakpoint: breakpoints.md,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: breakpoints.sm,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    centerPadding: '3rem',
                },
            },
        ],
    });

    // Internet Speed Item
    bfSlick.assignCarousel('.js-slick-carousel--internet-speed', {
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        prevArrow: bfSlick.getPrevSlickBtn(),
        nextArrow: bfSlick.getNextSlickBtn(),
        responsive: [
            {
                breakpoint: breakpoints.lg,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: breakpoints.md,
                settings: {
                    centerMode: true,
                    arrows: false,
                    slidesToShow: 1,
                },
            },
        ],
    });

    // Channel Discover
    bfSlick.assignCarousel('.js-slick-carousel--dots-and-arrows', {
        arrows: true,
        infinite: false,
        dots: true,
        // centerMode: true,
        centerPadding: '2rem',
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: bfSlick.getPrevSlickBtn(),
        nextArrow: bfSlick.getNextSlickBtn(),
        responsive: [
            {
                breakpoint: breakpoints.md,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: breakpoints.sm,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '3rem',
                },
            },
        ],
    });

    // Mobile Devices
    bfSlick.assignCarousel('.js-slick-carousel--mobility-list-devices', {
        arrows: true,
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: bfSlick.getPrevSlickBtn(),
        nextArrow: bfSlick.getNextSlickBtn(),
        // See: https://github.com/kenwheeler/slick/issues/3207#issuecomment-342781958.
        rows: 0,
        responsive: [
            {
                breakpoint: breakpoints.md + 1,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: breakpoints.sm,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    bfSlick.assignCarousel('.js-slick-carousel--mobility-list-plans', {
        arrows: true,
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: bfSlick.getPrevSlickBtn(),
        nextArrow: bfSlick.getNextSlickBtn(),
        responsive: [
            {
                breakpoint: breakpoints.md + 1,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: breakpoints.sm,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});
