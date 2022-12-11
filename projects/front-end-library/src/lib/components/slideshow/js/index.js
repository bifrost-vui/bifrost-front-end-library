import $ from 'jquery';
import '../../../js/components/slick-carousel.js';

/*-------- Apply reversed on navigation controls -------------*/

$('.bf-slideshow__inner').on('init', function (slick) {
    if ($('.slick-current .bf-hero').hasClass('reversed')) {
        $('.bf-slideshow .bfslick__controls').addClass('reversed');
    }
});
$('.bf-slideshow__inner').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('.bf-slideshow .bfslick__controls').removeClass('reversed');
    if ($('.slick-current .bf-hero').hasClass('reversed')) {
        $('.bf-slideshow .bfslick__controls').addClass('reversed');
    }
});

/* ------ Hero SlideShow initialisation ------------*/

bfSlick.assignCarousel('.js-bf-slideshow--hero-slideshow', {
    dots: true,
    appendDots: '.bfslick__controls__counter',
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    adaptiveHeight: false,
    prevArrow: bfSlick.getPrevSlickBtn(),
    nextArrow: bfSlick.getNextSlickBtn(),
    appendArrows: '.bfslick__controls',
    slidesToScroll: 1,
    centerPadding: 0,
    mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnDotsHover: true,
});
