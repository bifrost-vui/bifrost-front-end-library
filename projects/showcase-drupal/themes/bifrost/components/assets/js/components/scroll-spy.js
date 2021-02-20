import {breakpoints} from '../utils/breakpoints';
import $ from 'jquery';

$(function () {
  const scrollSpySectionsElements_array = document.querySelectorAll(".js-scrollspy-section") || [];
  const navbarHeight = $('.js-navbar-sticky-top').height();
  const dropdownHeight = $('.js-dropdown-sticky').height();

  let sections = {};
  let scrollTimer;

  // Functions
  // ------------------------------------------
  const getDefaultValues = () => {
    scrollSpySectionsElements_array.forEach((e) => {
      let linkLabel = $('.js-scrollspy-link[href*=' + e.id + ']').text();

      if (typeof sections[e.id] == "undefined") {
        sections[e.id] = {
          offsetTop: e.getBoundingClientRect().top,
          label: linkLabel
        }
      }
    });
  };

  const setActiveLink = (sectionId, currentSectionLabel) => {
    $('.js-scrollspy-link').removeClass('active');
    $('.js-scrollspy-link[href*=' + sectionId + ']').addClass('active');
    $('.js-scrollspy-active-section-label').html(currentSectionLabel);
  };

  // Need to add extra offset when subnav or mobile dropdown are present
  const setOffset = () => {
    let extraOffSet = 0;

    if(navbarHeight) {
      extraOffSet += navbarHeight;
    }

    if($(window).width() < breakpoints.lg && dropdownHeight) {
      extraOffSet += dropdownHeight;
    }
    return extraOffSet;
  };

  const updateScrollActiveLink = () => {
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    scrollPosition = scrollPosition + setOffset();

    setActiveLink(scrollSpySectionsElements_array[0].id, scrollSpySectionsElements_array[0].label); // set default value

    for (let currentSectionId in sections) {
      if (sections[currentSectionId].offsetTop <= scrollPosition +1) {
        setActiveLink(currentSectionId, sections[currentSectionId].label);
      }
    }
  };

  const setDefaultSpyScrollValues = () => {
    const idFirstSection = scrollSpySectionsElements_array[0].id;
    const firstSectionLabel = $('.js-scrollspy-link[href*=' + idFirstSection + ']').text();
    setActiveLink(idFirstSection, firstSectionLabel); // set default value
  };

  const initSpyScroll = () => {
    getDefaultValues();
    setDefaultSpyScrollValues();
    updateScrollActiveLink();
  };

  const goToSection = (e) => {
    e.preventDefault();
    $(window).off("scroll", scrollHandler);

    let anchorId = e.currentTarget.hash.replace('#', '');
    let additionOffset = setOffset();

    $("html, body").animate({scrollTop: sections[anchorId].offsetTop - additionOffset}, 200, function(){
      $(window).on("scroll", scrollHandler);
    });
  };

  const scrollHandler = () => {
    clearTimeout(scrollTimer);
    updateScrollActiveLink();
    scrollTimer = setTimeout(updateScrollActiveLink, 300);
  };

  // Event declaration
  // ------------------------------------------
  if (scrollSpySectionsElements_array.length) {
    $('.js-scrollspy-goto-animate').on('click', goToSection);
    $(window).on("scroll", scrollHandler);
    $('.link-back-to-top').on('click', function(e){
      setTimeout(setDefaultSpyScrollValues(),300);
    });

    initSpyScroll();
    window.onresize = initSpyScroll;
  }
});
