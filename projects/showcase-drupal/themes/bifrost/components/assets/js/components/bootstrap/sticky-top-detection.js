import $ from 'jquery';

$(function () {

  var _$stickies = [].slice.call(document.querySelectorAll('.sticky-top'));
  var navbarHeight = $('.js-navbar-sticky-top').height();

  _$stickies.forEach(function(_$sticky){

    if(! _$sticky.classList.contains('js-navbar-sticky-top') && navbarHeight) {
      _$sticky.style.top = navbarHeight + 'px';
    }

    if (CSS.supports && CSS.supports('position', 'sticky')) {
      apply_sticky_class(_$sticky);

      window.addEventListener('scroll', function(){
        apply_sticky_class(_$sticky);
      });
    }
  });

  function apply_sticky_class(_$sticky){
    const currentOffset = _$sticky.getBoundingClientRect().top;
    const stickyOffset = parseInt( getComputedStyle(_$sticky).top.replace('px','') );
    const isStuck = currentOffset <= stickyOffset;

    if (isStuck) {
      _$sticky.classList.add('js-is-sticky');
    } else {
      _$sticky.classList.remove('js-is-sticky');
    }
  }
});
