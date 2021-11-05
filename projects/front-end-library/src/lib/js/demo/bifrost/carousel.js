import 'slick-carousel';
import {breakpoints} from '../../utils/breakpoints';

// Documentation: https://kenwheeler.github.io/slick/

bfSlick.assignCarousel('.js-bf-carousel-demo', {
    arrows: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    mobileFirst: true,
    prevArrow: bfSlick.getPrevSlickBtn(),
    nextArrow: bfSlick.getNextSlickBtn(),
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
