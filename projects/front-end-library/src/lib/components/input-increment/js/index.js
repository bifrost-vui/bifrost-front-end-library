/**
 *  Script for the Bifröst  Input increment component
 **/
import $ from 'jquery';

$(function () {
    let container = $('.js-bf-input-increment');

    container.each(function (i, el) {
        const $this = $(el),
            $quantityInput = $this.find('.js-bf-input-increment__input'),
            $plusButton = $this.find('.js-bf-input-increment__plus'),
            $minusButton = $this.find('.js-bf-input-increment__minus'),
            $maxValue = +$quantityInput.attr('max'),
            $minValue = +$quantityInput.attr('min');

        let currentValue = $quantityInput.val();
        let initialValue = $quantityInput.val();

        checkLimitValues(currentValue);

        if ($this.hasClass('disabled')) {
            $plusButton.prop('disabled', true);
            $plusButton.addClass('disabled');
            $minusButton.prop('disabled', true);
            $minusButton.addClass('disabled');
        }

        function setCurrentValue(value) {
            checkLimitValues(value);
            $quantityInput.val(value);
            currentValue = value;
        }

        $plusButton.click(function () {
            increment();
        });

        $minusButton.click(function () {
            decrement();
        });

        $quantityInput.keyup(function () {
            setCurrentValue($quantityInput.val());
        });

        $quantityInput.blur(function () {
            if (!$quantityInput.val()) {
                $quantityInput.val(initialValue);
            }
        });

        function increment() {
            currentValue++;
            setCurrentValue(currentValue);
        }

        function decrement() {
            currentValue--;
            setCurrentValue(currentValue);
        }

        function checkLimitValues(quantity) {
            if (quantity >= $maxValue) {
                $plusButton.prop('disabled', true);
                $plusButton.addClass('disabled');
            } else {
                $plusButton.prop('disabled', false);
                $plusButton.removeClass('disabled');
            }

            if (quantity <= $minValue) {
                $minusButton.prop('disabled', true);
                $minusButton.addClass('disabled');
            } else {
                $minusButton.prop('disabled', false);
                $minusButton.removeClass('disabled');
            }

            if (
                quantity &&
                ((!isNaN($minValue) && quantity < $minValue) || (!isNaN($maxValue) && quantity > $maxValue))
            ) {
                $this.addClass('is-invalid');
            } else {
                $this.removeClass('is-invalid');
            }
        }
    });
});
