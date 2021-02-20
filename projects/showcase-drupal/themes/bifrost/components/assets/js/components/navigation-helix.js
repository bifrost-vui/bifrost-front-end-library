import { breakpoints } from '../utils/breakpoints';
import $ from 'jquery';
import {_window} from "../utils/window";

$(function () {
  //Open mega menu dropdown on hover
  if ($(window).width() >= breakpoints.lg) {

    $('.js-mega-collapse', '.navbar--helix').mouseenter(function() {
      if(!$(this).hasClass('show')) {
        $('.js-navbar-toggler', this).trigger('click');
      }
    });
    $('.js-mega-collapse', '.navbar--helix').mouseleave(function() {
      if($(this).hasClass('show')) {
        $('.js-navbar-toggler', this).trigger('click');
      }
    });
  }

  // Change tabindex for active submenu
  $(".js-dropdown--megamenu", '.navbar--helix').on('shown.bs.dropdown', function (e) {
    $('.dropdown-menu.show a').each(function(index, value){
      $(this).attr('tabindex', "");
      if(index === 0)  {
        $(this).focus();
      }
    });
  });

  $(".js-dropdown--megamenu", '.navbar--helix').on('hide.bs.dropdown', function (e) {
    $('.dropdown-menu.show a').each(function(){
      $(this).attr('tabindex', "-1");
    });
  });
});
