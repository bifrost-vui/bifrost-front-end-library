import $ from 'jquery';
import { _window } from '../utils/window';

$(function () {
  const parentContainerElem = '.js-backdrop-on-collapse';
  const parentContainer = $(parentContainerElem);

  parentContainer.addClass('sticky-bar--over-shadow');

  const $backdrop = $('<div class="backdrop-over-content js-backdrop-over-content"></div>');
  parentContainer.after($backdrop);

  $('[data-toggle="collapse"]', parentContainer).on('click', function(e){
    parentContainer.removeClass('js-content-is-collapsed');
    const currentParentContainer = $(this).parents(parentContainerElem);

    if(this.getAttribute("aria-expanded") != "true") {
      if(currentParentContainer.hasClass('js-is-sticky')) {
        currentParentContainer.addClass('js-content-is-collapsed');
        _window.freeze();
      }
    } else {
      currentParentContainer.removeClass('js-content-is-collapsed');
      _window.unfreeze();
    }
  });

  $('.js-backdrop-over-content').on('click', function(){
    $('.collapse', parentContainerElem).collapse('hide');
    $('.js-content-is-collapsed').removeClass('js-content-is-collapsed');
    _window.unfreeze();
  });
});
