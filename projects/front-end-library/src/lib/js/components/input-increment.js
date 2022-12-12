/**
 * Increment class for input-increment.twig
 */
class InputIncrement {
    constructor(container, selector) {
        this.container = container;
        this.incrementInput = this.container.getElementsByClassName(`${selector}__input`)[0];
        this.btnPlus = this.container.getElementsByClassName(`${selector}__plus`)[0];
        this.tooltipInfosPlus = this.container.getElementsByClassName(`${selector}__plus-infos-tooltip`)[0];
        this.tooltipInfosPlusCloseBtn = this.container.getElementsByClassName(
            `${selector}__plus-infos-tooltip-close`
        )[0];
        this.btnMinus = this.container.getElementsByClassName(`${selector}__minus`)[0];
        this.tooltipInfosMinus = this.container.getElementsByClassName(`${selector}__minus-infos-tooltip`)[0];
        this.tooltipInfosMinusCloseBtn = this.container.getElementsByClassName(
            `${selector}__minus-infos-tooltip-close`
        )[0];
        this.btnReset = this.container.getElementsByClassName(`${selector}__reset`)[0];
        this.value = this.incrementInput.value;
        this.min = parseInt(this.incrementInput.getAttribute('min'));
        this.max = parseInt(this.incrementInput.getAttribute('max'));

        this.delegateEvents();
        this.updateBtnState();
    }

    delegateEvents() {
        try {
            this.btnMinus.addEventListener('click', this.onClickIncrement.bind(this, 'minus'));
            this.btnPlus.addEventListener('click', this.onClickIncrement.bind(this, 'plus'));

            if (typeof this.btnReset != 'undefined') {
                this.btnReset.addEventListener('click', this.onClickReset.bind(this));
            }

            if (typeof this.tooltipInfosPlusCloseBtn != 'undefined') {
                this.tooltipInfosPlusCloseBtn.addEventListener(
                    'click',
                    this.onClickCloseInfoTooltip.bind(this, 'plus')
                );
            }

            if (typeof this.tooltipInfosMinusCloseBtn != 'undefined') {
                this.tooltipInfosMinusCloseBtn.addEventListener(
                    'click',
                    this.onClickCloseInfoTooltip.bind(this, 'minus')
                );
            }
        } catch (e) {
            console.warn('InputIncrement error : ', e);
        }
    }

    onClickReset() {
        this.incrementInput.val(0).change();
    }

    onClickCloseInfoTooltip(btnTriggeredAction) {
        switch (btnTriggeredAction) {
            case 'plus':
                typeof this.tooltipInfosPlus != 'undefined' ? this.tooltipInfosPlus.classList.remove('show') : '';
                break;
            case 'minus':
                typeof this.tooltipInfosMinus != 'undefined' ? this.tooltipInfosMinus.classList.remove('show') : '';
                break;
        }
    }

    onClickIncrement(btnTriggeredAction) {
        this.resetBtnState();
        const currentValue = this.getValue();
        let newValue = 0;

        if (!isNaN(currentValue)) {
            if (btnTriggeredAction === 'plus') {
                if (currentValue < this.max) {
                    newValue = currentValue + 1;
                    this.incrementInput.value = newValue;
                    this.incrementInput.setAttribute('value', newValue);
                }
                this.updateBtnState();
            } else if (btnTriggeredAction === 'minus') {
                if (currentValue > this.min) {
                    newValue = currentValue - 1;
                    this.incrementInput.value = newValue;
                    this.incrementInput.setAttribute('value', newValue);
                }
                this.updateBtnState();
            }
        } else {
            this.incrementInput.val(newValue);
        }

        this.incrementInput.setAttribute('value', String(newValue));
        // Create a new 'change' event
        const event = new Event('input');
        this.incrementInput.dispatchEvent(event);
    }

    updateBtnState() {
        const currentValue = this.getValue();

        if (currentValue == this.min) {
            this.btnMinus.disabled = true;
            typeof this.tooltipInfosMinus != 'undefined' ? this.tooltipInfosMinus.classList.add('show') : '';
        } else if (currentValue == this.max) {
            this.btnPlus.disabled = true;
            typeof this.tooltipInfosPlus != 'undefined' ? this.tooltipInfosPlus.classList.add('show') : '';
        }
    }

    resetBtnState() {
        this.btnMinus.disabled = false;
        this.btnPlus.disabled = false;
        typeof this.tooltipInfosMinus != 'undefined' ? this.tooltipInfosMinus.classList.remove('show') : '';
        typeof this.tooltipInfosPlus != 'undefined' ? this.tooltipInfosPlus.classList.remove('show') : '';
    }

    getValue() {
        return parseInt(this.incrementInput.value);
    }
}

export function initIncrementInputs(incrementSelector = 'js-input-increment') {
    const incrementInputs = document.getElementsByClassName(incrementSelector);
    for (let i = 0; i < incrementInputs.length; i++) {
        new InputIncrement(incrementInputs[i], incrementSelector);
    }
}
