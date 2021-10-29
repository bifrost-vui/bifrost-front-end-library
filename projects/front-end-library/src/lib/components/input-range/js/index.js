import $ from 'jquery';

$(function () {
    const container = $('.js-bf-input-range');

    container.each(function (i, el) {
        const $this = $(el),
            //inputs
            $minRangeInput = $this.find('.bf-input-range__input__min'),
            $maxRangeInput = $this.find('.bf-input-range__input__max'),
            //inputs attributes
            $minInputValue = $minRangeInput.attr('min'),
            $maxInputValue = $minRangeInput.attr('max'),
            $unit = $minRangeInput.attr('data-unit'),
            //overlay divs
            $excludeLeft = $this.find('.bf-input-range__exclude--left'),
            $excludeRight = $this.find('.bf-input-range__exclude--right'),
            $rangeValue = $this.find('.bf-input-range__value'),
            $handleLeft = $this.find('.bf-input-range__handle--left'),
            $handleRight = $this.find('.bf-input-range__handle--right'),
            //labels
            $minLabel = $this.find('.bf-input-range__handle--left .bf-input-range__label__value'),
            $maxLabel = $this.find('.bf-input-range__handle--right .bf-input-range__label__value');

        displayCurrentValue();

        function displayCurrentValue() {
            const min = doTheMath($minRangeInput.val());
            const max = doTheMath($maxRangeInput.val());
            $minLabel.html($minRangeInput.val());
            $maxLabel.html($maxRangeInput.val());
            $excludeLeft.css('width', min + '%');
            $excludeRight.css('width', (100 - max) + '%');
            $rangeValue.css('left', min + '%').css('right', (100 - max) + '%');
            $handleLeft.css('left', min + '%');
            $handleRight.css('right', (100 - max) + '%');
        }

        function doTheMath(rangeInput) {
            return (100 / (parseInt($maxInputValue) - parseInt($minInputValue))) * parseInt(rangeInput) - (100 / (parseInt($maxInputValue) - parseInt($minInputValue))) * parseInt($minInputValue)
        }

        $this.on('input', '.bf-input-range__input__min', function () {
            displayCurrentValue();
        });

        $this.on('input', '.bf-input-range__input__max', function () {
            displayCurrentValue();
        })
    });
});