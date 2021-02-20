import {_window} from '../../utils/window';
import $ from 'jquery';
import {scrollToTarget} from "../../utils/scroll";
import {animation} from '../animation';

$(function () {

  var $body = $('body');

  $body.on('click', '.nav-tabs li a', function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      $(this).tab('show');
  });

  $body.on('shown.bs.tab', 'a[data-toggle="tab"]', function (e) {
      animation.triggerAnimInViewport();
  });

});

// On tabs, Automatically scroll to the content of the clicked tab.
$('a[data-toggle="tab"]', '.js-tab-autoscroll').on('shown.bs.tab', function (e) {
  let $sectionContent = $(this).parents().closest('.js-tab-autoscroll').find('.js-tab-autoscroll-content');
  scrollToTarget($sectionContent);
});
