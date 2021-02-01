import $ from 'jquery';
import {scrollToTarget} from "../../utils/scroll";
import {stickyBottomBar} from "../../components/sticky-bottom";
import {isDesktopUp} from "../../utils/breakpoints";

$(function () {

  function scrollToNextSlide(slideId){
    $(slideId).fadeIn();
    stickyBottomBar.refresh();

    const offsetAnchor = (isDesktopUp()) ? stickyBottomBar.height/2 : 0;
    scrollToTarget(slideId, offsetAnchor, 500);
  }

  $('.js-DEMO-byod-activate-step-2').on('change', function () {
    if ($(this).is(":checked")) {
      $('#stickyNavBtnNext').removeClass('disabled');
    }
  });

  $('.js-DEMO-byod-goto-step-2').on('click', function (e) {
    e.preventDefault();

    $(this).removeClass('js-DEMO-byod-goto-step-2').addClass('js-DEMO-byod-goto-step-3 disabled');
    // $('.js-DEMO-byod-progress-bar').css('width', '25%');

    scrollToNextSlide('.js-DEMO-section-step-2');

    $(this).off('click');
    $('.js-DEMO-byod-goto-step-3').on('click', function (e) {
      e.preventDefault();
      $(this).removeClass('js-DEMO-byod-goto-step-3').addClass('js-DEMO-byod-goto-step-4');
      // $('#stickyNavBtnNext').addClass('disabled');

      scrollToNextSlide('.js-DEMO-section-step-3');
      // $('.js-DEMO-byod-progress-bar').css('width', '50%');

      $('.js-DEMO-byod-goto-step-4').on('click', gotoStep4);
    });
  });

  $('.js-input-increment__plus', '.js-DEMO-byod-activate-goto-step-btn').on('click', function () {
    $('#stickyNavBtnNext').removeClass('disabled');
  });



  function gotoStep4(e){
    e.preventDefault();

    $('#stickyNavBtnNext').hide();
    $('#stickyNavBtnProceedToCheckout').removeClass('d-none');

    scrollToNextSlide('#sectionHasTpc');
    // $('.js-DEMO-byod-progress-bar').css('width', '75%');
  }

  $('.js-DEMO-byod-activate-proceed-to-checkout-btn').on('change', function () {
    $('#stickyNavBtnProceedToCheckout').removeClass('disabled');
    // $('.js-DEMO-byod-progress-bar').css('width', '100%');
  });

});