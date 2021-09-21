import $ from 'jquery';
import 'slick-carousel';

window.bfSlick = {

    getPrevSlickBtn : () => {
        const lang = $('html').attr('lang');
        const token = (lang === 'en') ? 'Previous' : 'Précédent';
        return `<button class="slick-prev" aria-label="${token}" type="button">${token}</button>`;
    },

    getNextSlickBtn : () => {
        const lang = $('html').attr('lang');
        const token = (lang === 'en') ? 'Next' : 'Suivant';
        return `<button class="slick-next" aria-label="${token}" type="button">${token}</button>`;
    },

    assignCarousel : (slickTarget = ".js-slick", slickParams = {}) => {
        $(slickTarget).each(function (i, elem) {
            const slickData = $(elem).data('slick') || {};
            const mergeSlickData = Object.assign(slickParams, slickData);
            $(elem).slick(mergeSlickData);
        })
    },
};

   // heroSlideShow
   bfSlick.assignCarousel('.js-slick-carousel--hero-slideshow', {
    dots: true,
    appendDots: '.bfslick-controls-dots',
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: bfSlick.getPrevSlickBtn(),
    nextArrow: bfSlick.getNextSlickBtn(),
    appendArrows:'.bfslick-controls',
    slidesToScroll: 1,
    centerPadding: 0,
    mobileFirst: true,
    autoplay: false,
    autoplaySpeed: 4000,
});

$('.slick-next').on('click', function () { $(this).parents('.bf-slideshow').slick('slickNext'); });
$('.slick-prev').on('click', function () { $(this).parents('.bf-slideshow').slick('slickPrev'); });
