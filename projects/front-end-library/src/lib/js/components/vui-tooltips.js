import { Tooltip } from '../Class/Tooltip';

export const tooltips = {
    cssClassSelector: 'js-tooltip-custom',
    items: [],

    get htmlItems() {
        return Array.from(document.getElementsByClassName(this.cssClassSelector));
    },

    init(selector = 'js-tooltip-custom', options = {}) {
        this.cssClassSelector = selector;

        this.items = [];

        this.items = this.htmlItems.map(function (item) {
            if (!item.classList.contains('js-tooltip-loaded')) {
                return new Tooltip(item, selector, options);
            }
        });
    },

    reInit() {
        this.items.map((item) => {
            item.removeEvents();
            item.delegateEvents();
        });
    },
};

window.uikit.tooltips = tooltips;
