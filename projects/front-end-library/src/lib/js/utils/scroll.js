import $ from "jquery";

export const getScrollDuration = function(target) {
  let currentTop = $(window).scrollTop(),
    rate = 0.5, // 1000px/500ms distance;
    distance = Math.abs(target- currentTop);

  return distance * rate;
};

export const scrollToTarget = function(stepTarget, offsetTopAlteration = 0, duration = 500, timeout = 0, callbackFunction = function () {}) {
  // const duration = getScrollDuration(stepTarget);

  setTimeout(() => {
    $("html, body").stop().animate({scrollTop: $(stepTarget).offset().top + offsetTopAlteration }, duration, callbackFunction);
  }, timeout);
};
