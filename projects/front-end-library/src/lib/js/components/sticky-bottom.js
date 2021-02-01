import $ from 'jquery';

export let stickyBottomBar = {
  elem: document.querySelector('.js-position-sticky-bottom'),
  elemTopTarget: null,
  prevScrollPosition: 0,
  isScrolling: false,
  isDisabled: false,
  registeredElemBottomOffset: 0,

  get bottomElemOffset() {
    const rect = this.elem.getBoundingClientRect();
    return Math.floor(rect.top + rect.height) + window.scrollY;
  },

  get bottomOffsetTopTarget() {
    if (this.elemTopTarget) {
      const rect = this.elemTopTarget.getBoundingClientRect();
      return Math.floor(rect.top + rect.height) + window.scrollY;
    }

    return 0;
  },

  get height() {
    return this.elem.getBoundingClientRect().height || 0;
  },

  refresh() {
    this.registeredElemBottomOffset = this.bottomElemOffset;

    window.removeEventListener('scroll', this.updateStickyNavState);
    window.addEventListener('scroll', this.updateStickyNavState.bind(this));
  },

  updateOffset() {
    if (this.bottomElemOffset !== this.registeredElemBottomOffset && !this.elem.classList.contains('fixed-bottom')) {
      this.registeredElemBottomOffset = this.bottomElemOffset;
    }
  },

  updateStickyNavState() {
    if (!this.isScrolling && !this.isDisabled) {
      this.isScrolling = true;
      this.updateOffset();

      if ((window.scrollY + window.innerHeight) < this.registeredElemBottomOffset && (!this.elemTopTarget || this.bottomOffsetTopTarget < window.scrollY)) {
        if (this.prevScrollPosition < window.scrollY && this.prevScrollPosition < this.bottomOffsetTopTarget) {
          this.elem.classList.add('vui-anim--slide-from-bottom');
        }

        this.elem.classList.add('fixed-bottom');
      } else {
        this.elem.classList.remove('fixed-bottom', 'vui-anim--slide-from-bottom');
      }

      this.isScrolling = false;
      this.prevScrollPosition = window.scrollY;
    }
  },

  disable() {
    this.isDisabled = true;
    this.elem.classList.remove('fixed-bottom');
    this.elem.classList.add('vui-anim--slide-from-bottom');
  },

  activate() {
    this.isDisabled = false;
    this.updateStickyNavState();
  },

  init(objParams = {}) {
    Object.assign(this, objParams);

    if (typeof this.elem !== 'undefined' && this.elem) {
      this.elemTopTarget = this.elem.dataset.topElement
        ? document.querySelector(this.elem.dataset.topElement)
        : null;

      this.updateStickyNavState();

      window.addEventListener('scroll', this.updateStickyNavState.bind(this));
      window.addEventListener('resize', this.updateStickyNavState.bind(this));
    }
  },
};


