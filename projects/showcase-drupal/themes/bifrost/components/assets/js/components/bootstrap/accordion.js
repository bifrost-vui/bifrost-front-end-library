import { isInMediaBreakpointUp } from '../../utils/breakpoints';
import $ from 'jquery';
import {scrollToTarget} from "../../utils/scroll";

$(function () {

  // Scroll to the current active accordion item and desactivate the other
  $('.collapse', '.js-accordion-step-by-step__item').on('show.bs.collapse', function (e) {
    e.stopPropagation();

    const accordionContainerElem = $(this).data('parent');

    if($(accordionContainerElem).hasClass('js-accordion-step-by-step')) {
      try {
        const $accordionContainer = $(accordionContainerElem);
        const $currentActiveCard = $(this).parents('.js-accordion-step-by-step__item');
        const offsetAccordionContainer = $accordionContainer.offset().top;
        const previousActiveItem = $(`${accordionContainerElem} .js-accordion-step-by-step__item.active-accordion`);
        const previousActiveItemIndex = previousActiveItem.index();
        let offsetScroll = offsetAccordionContainer;

        if (isInMediaBreakpointUp('md')) {
          const nextIndexAccordionItem = $currentActiveCard.index();
          const heightSlideAccordion = $currentActiveCard.outerHeight();

          offsetScroll = offsetAccordionContainer + (heightSlideAccordion * nextIndexAccordionItem);

          if(previousActiveItemIndex < nextIndexAccordionItem) {
            window.scrollTo(0, previousActiveItem.offset().top);
          }
        }

        $("html, body").stop().animate({scrollTop: offsetScroll}, 500, 'swing');
      } catch (e){
        console.log('ERROR Bootstrap collapse : ', e);
      }
    }

  });

  // Simple show/hide collapse accordion item
  const accordionItemElem_fadeCollapse = '.js-accordion-item-toggle-active-class';
  $('.collapse', accordionItemElem_fadeCollapse).on('show.bs.collapse hide.bs.collapse', function (e) {
    e.stopPropagation();

    const currentCardElem = this.closest(accordionItemElem_fadeCollapse);
    currentCardElem.classList.toggle('active-accordion');
  });

  // Fix scrolling issue with accordions on mobile and firefox where clicking
  // on the next accordion section, scroll point would remain at the bottom
  // instead of expanding downwards.
  $('.collapse', '.js-scroll-coercion-fix').on('shown.bs.collapse', function (e) {
    e.stopPropagation();
    try {
      const $accordionItemParent = $(this).parent();
      scrollToTarget($accordionItemParent);
    } catch (ex){
      console.log('ERROR Bootstrap collapse : ', ex);
    }
  });

});