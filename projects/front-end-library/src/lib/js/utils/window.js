import $ from 'jquery';

window.addEventListener(
    'scroll',
    function (event) {
        currentWindowScroll.top = this.scrollY;
        currentWindowScroll.left = this.scrollX;
    },
    false
);

let currentWindowScroll = {
    top: 0,
    left: 0,
};

let _window = {
    freezePos: 0,
    isFreezed: false,
    freeze() {
        this.freezePos = currentWindowScroll.top;
        $('body').css('top', `-${this.freezePos}px`);
        $('body').addClass('js-vui--window-freeze');
        this.isFreezed = true;
    },
    unfreeze() {
        $('body').removeClass('js-vui--window-freeze');

        if (this.freezePos != 0) {
            window.scrollTo(0, this.freezePos);
            this.freezePos = 0;
        }

        this.isFreezed = false;
    },
};

let isInViewport = function (elem) {
    const bounding = elem.getBoundingClientRect();
    return (
        // bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom - bounding.height * 0.9 <= (window.innerHeight || document.documentElement.clientHeight) &&
        Math.round(bounding.right) <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const getCurrentWindowScroll = function () {
    currentWindowScroll.top = $(window).scrollTop();
    currentWindowScroll.left = $(window).scrollLeft();
};

export { _window, currentWindowScroll, isInViewport };

/* Dom Ready */
$(function () {
    getCurrentWindowScroll();
});
