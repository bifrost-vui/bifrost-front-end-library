import { breakpoints } from '../../utils/breakpoints';
import 'slick-carousel';

// Documentation: https://kenwheeler.github.io/slick/

slick.assignCarousel('.js-slick-carousel--demo', {
    arrows: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    prevArrow: slick.getPrevSlickBtn(),
    nextArrow: slick.getNextSlickBtn(),
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