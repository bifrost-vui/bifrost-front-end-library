import $ from 'jquery';
import {scrollToTarget} from "../utils/scroll";
import {stickyBottomBar} from "./sticky-bottom";
import {isDesktopUp} from "../utils/breakpoints";

$(function () {
  let nbFullPageSection = document.getElementsByClassName('js-fullpage-section').length;
  let activeSection = 0;

  function scrollToNextFullpageSection(){
    // $(slideId).fadeIn();
    activeSection++;
    let nextSection = document.getElementsByClassName('js-fullpage-section')[activeSection];
    nextSection.style.display = "flex";
    stickyBottomBar.refresh();

    const offsetAnchor = (isDesktopUp()) ? stickyBottomBar.height/2 : 0;
    scrollToTarget(nextSection, offsetAnchor, 500);
  }

  function updateControlBar(){
    if(activeSection == (nbFullPageSection - 1)){
      $('.js-fullpage-btn-next-step').hide();
      $('.js-fullpage-btn-next-page').show();
    } else {
      $('.js-fullpage-btn-next-step').addClass('disabled');
    }
  }

  // Controls
  // ------------------------------------------------------------
  $('.js-fullpage-activate-controls').on('click', function () {
    let target = (activeSection == (nbFullPageSection - 1))
      ? '.js-fullpage-btn-next-page'
      : '.js-fullpage-btn-next-step';

    $(target).removeClass('disabled');
  });

  $('.js-fullpage-btn-next-step').on('click', function (e) {
    e.preventDefault();

    // $(this).addClass('disabled');
    scrollToNextFullpageSection();
    updateControlBar();
  });
});