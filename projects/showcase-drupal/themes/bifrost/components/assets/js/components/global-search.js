import $ from 'jquery';
import {_window} from "../utils/window";
import {isDesktopUp} from "../utils/breakpoints";

$(function () {
  $('.js-helix-global-search').on('show.bs.collapse', function (e) {
      e.stopPropagation();
      $(this).addClass('active');

      // Toggle search quick-links/suggestion
      $('.js-helix-global-search-collapse').addClass('is-active');

      if(!isDesktopUp()){
        _window.freeze();
      }

      setTimeout(()=>{
        $('.js-input-search').focus();
      }, 500);
  });
  $('.js-helix-global-search').on('hide.bs.collapse', function (e) {
    e.stopPropagation();
    $(this).removeClass('active');

    // Toggle search quick-links/suggestion
    $('.js-helix-global-search-collapse').removeClass('is-active');

    if(!isDesktopUp()){
      _window.unfreeze();
    }
  });

});
