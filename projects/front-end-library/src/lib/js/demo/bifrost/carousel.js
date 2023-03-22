import 'slick-carousel';

// Documentation: https://kenwheeler.github.io/slick/

bfSlick.assignCarousel('.js-bf-carousel-demo', {
    arrows: false,
    centerMode: true,
    centerPadding: '48px',
    dots: true,
    infinite: false,
    mobileFirst: true,
    nextArrow: bfSlick.getNextSlickBtn(),
    prevArrow: bfSlick.getPrevSlickBtn(),
    rows: 0, // See: https://github.com/kenwheeler/slick/issues/3207#issuecomment-342781958.
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: bfTheme.breakpoints.sm - 1,
            settings: {
                arrows: true,
                centerMode: false,
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: bfTheme.breakpoints.md,
            settings: {
                arrows: true,
                centerMode: false,
                slidesToShow: 4,
                slidesToScroll: 4,
            },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ],
});
