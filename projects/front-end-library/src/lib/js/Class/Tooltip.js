export class Tooltip {
    constructor(container, selector, options) {
        Object.assign(
            this,
            {
                selector,
                container,
                isModeHover: false,
                isTooltipOpenOnClick: false,
            },
            options
        );

        this.btnShow = this.container.getElementsByClassName(`${selector}__btn`)[0];
        this.tooltipContent = this.container.getElementsByClassName(`${selector}__content`)[0];
        this.btnClose = this.container.getElementsByClassName(`${selector}__close`)[0];

        window.addEventListener('DOMContentLoaded', (event) => {
            this.initialTooltipContentData = this.tooltipContent.getBoundingClientRect();
            this.updateTooltipPositionHorizontal();
        });
        this.container.classList.add('js-tooltip-loaded');
        this.delegateEvents();
    }

    getClosest(elem, selector) {
        // Element.matches() polyfill
        if (!Element.prototype.matches) {
            Element.prototype.matches =
                Element.prototype.matchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector ||
                Element.prototype.oMatchesSelector ||
                Element.prototype.webkitMatchesSelector ||
                function (s) {
                    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                        i = matches.length;
                    while (--i >= 0 && matches.item(i) !== this) {}
                    return i > -1;
                };
        }

        // Get the closest matching element
        for (; elem && elem !== document; elem = elem.parentNode) {
            if (elem.matches(selector)) return elem;
        }

        return null;
    }

    delegateEvents() {
        try {
            this.onClickShowHandler = this.onClickShow.bind(this);
            this.onClickHideHandler = this.hide.bind(this);

            if (this.isModeHover) {
                this.onHoverShowHandler = this.onHoverShow.bind(this);
                this.btnShow.addEventListener('mouseover', this.onHoverShowHandler);
                this.btnShow.addEventListener('mouseleave', this.onMouseLeaveHandler.bind(this));
            }

            this.btnShow.addEventListener('click', this.onClickShowHandler);
            this.btnClose.addEventListener('click', this.onClickHideHandler);
            window.addEventListener('resize', this.updateTooltipPositionHorizontal);
        } catch (e) {
            console.warn('Tooltip error in function delegateEvents() : ', e);
        }
    }

    removeEvents() {
        try {
            this.btnShow.removeEventListener('click mouseover', this.onClickShowHandler);
            this.btnClose.removeEventListener('click mouseleave', this.onClickHideHandler);
            window.removeEventListener('resize', this.updateTooltipPositionHorizontal);
        } catch (e) {
            console.warn('Tooltip error in function removeEvents() : ', e);
        }
    }

    onClickShow(e) {
        e.preventDefault();

        if (this.isModeHover) {
            document.addEventListener('click', this.onDocumentClickHandler.bind(this));
        } else {
            this.hideAll();
        }

        this.isTooltipOpenOnClick = true;
        this.updateTooltipPositionHorizontal();
        this.show();
    }

    onHoverShow(e) {
        e.preventDefault();
        this.updateTooltipPositionHorizontal();
        this.show();
    }

    onMouseLeaveHandler() {
        if (!this.isTooltipOpenOnClick) {
            this.hide();
        }
    }

    onDocumentClickHandler(e) {
        e.preventDefault();

        const closeSelector = this.getClosest(e.target, `.${this.selector}__btn`);

        if (!closeSelector) {
            document.removeEventListener('click', this.onDocumentClickHandler);
            this.btnShow.addEventListener('mouseleave', this.hide.bind(this));
            this.hide();
        }
    }

    show() {
        this.tooltipContent.classList.add('show');
        // window.addEventListener("scroll", this.updateTooltipPositionVertical.bind(this));
    }

    hide(e) {
        if (typeof e !== 'undefined') {
            e.preventDefault();
        }
        this.tooltipContent.classList.remove('show');
        this.isTooltipOpenOnClick = false;
        // window.removeEventListener("scroll", this.updateTooltipPositionVertical.bind(this));
    }

    hideAll() {
        const tooltips = document.getElementsByClassName(`${this.selector}__content`);
        if (tooltips.length) {
            for (let i = 0; i < tooltips.length; i++) {
                tooltips[i].classList.remove('show');
            }
        }
    }

    get xPlacementString() {
        return this.tooltipContent.getAttribute('x-placement');
    }

    get xPlacement() {
        const vertical = ~this.xPlacementString.indexOf('top') ? 'top' : 'bottom';

        let horizontal = 'center';
        if (~this.xPlacementString.indexOf('left')) {
            horizontal = 'left';
        } else if (~this.xPlacementString.indexOf('right')) {
            horizontal = 'right';
        }

        return { horizontal, vertical };
    }

    get newPlacementHorizontal() {
        let newPlacementHorizontal;

        // X placement
        if (!this.initialTooltipContentData || this.initialTooltipContentData.width === 0) {
            this.initialTooltipContentData = this.tooltipContent.getBoundingClientRect();
        }
        let widthDiff = window.innerWidth - this.initialTooltipContentData.width;
        if (this.initialTooltipContentData.left < 0) {
            newPlacementHorizontal = 'left';
        } else if (
            this.initialTooltipContentData.left - widthDiff < window.innerWidth &&
            this.initialTooltipContentData.right - widthDiff < window.innerWidth &&
            this.initialTooltipContentData.left + this.initialTooltipContentData.width < window.innerWidth
        ) {
            newPlacementHorizontal = 'center';
        } else {
            newPlacementHorizontal = 'right';
        }

        return newPlacementHorizontal;
    }

    get newPlacementVertical() {
        let newPlacementVertical;

        if (this.xPlacement.vertical == 'top') {
            if (window.scrollY + window.innerHeight * 0.1 >= this.tooltipContent.offsetTop) {
                newPlacementVertical = 'bottom';
            } else {
                newPlacementVertical = 'top';
            }
        } else {
            if (
                window.scrollY + window.innerHeight * 0.9 <
                this.tooltipContent.getBoundingClientRect().top + this.tooltipContent.getBoundingClientRect().height
            ) {
                newPlacementVertical = 'top';
            } else {
                newPlacementVertical = 'bottom';
            }
        }

        return newPlacementVertical;
    }

    updateTooltipPositionHorizontal() {
        try {
            this.tooltipContent.setAttribute(
                'x-placement',
                `${this.xPlacement.vertical}-${this.newPlacementHorizontal}`
            );
        } catch (e) {
            console.warn('Tooltip error : updateTooltipPositionHorizontal() -> ', e);
        }
    }
    updateTooltipPositionVertical() {
        try {
            this.tooltipContent.setAttribute(
                'x-placement',
                `${this.newPlacementVertical}-${this.xPlacement.horizontal}`
            );
        } catch (e) {
            console.warn('Tooltip error : updateTooltipPositionVertical() -> ', e);
        }
    }
}
