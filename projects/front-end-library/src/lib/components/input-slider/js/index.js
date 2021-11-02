import $ from 'jquery';

$(function () {
    const container = $('.js-bf-input-slider');

    container.each(function (i, el) {
        const $this = $(el),
            //inputs
            $minRangeInput = $this.find('.bf-input-slider__input__min'),
            $maxRangeInput = $this.find('.bf-input-slider__input__max'),
            //inputs attributes -- recover data with the first available input
            $minInputValue = $this.find('input').attr('min'),
            $maxInputValue = $this.find('input').attr('max'),
            //overlay divs
            $rangeValue = $this.find('.bf-input-slider__value'),
            $handleLeft = $this.find('.bf-input-slider__handle--left'),
            $handleRight = $this.find('.bf-input-slider__handle--right'),
            //labels
            $minLabel = $this.find('.bf-input-slider__handle--left .bf-input-slider__label__value'),
            $maxLabel = $this.find('.bf-input-slider__handle--right .bf-input-slider__label__value');


        displayCurrentValue();

        function displayCurrentValue() {
            let min, max;
            if ($maxRangeInput.val() == undefined){
                min = doTheMath($minRangeInput.val());
                max = doTheMath($maxInputValue);
                $minLabel.html($minRangeInput.val());
            }
            else if ($minRangeInput.val() == undefined){
                max = doTheMath($maxRangeInput.val());
                min = doTheMath($minInputValue);
                $maxLabel.html($maxRangeInput.val());
            }
            else {
                min = doTheMath($minRangeInput.val());
                max = doTheMath($maxRangeInput.val());
                $minLabel.html($minRangeInput.val());
                $maxLabel.html($maxRangeInput.val());
            }
            $handleLeft.css('left', min + '%');
            $handleRight.css('right', (100 - max) + '%');
            $rangeValue.css('left', min + '%').css('right', (100 - max) + '%');
        }

        function doTheMath(rangeInput) {
            return (100 / (parseInt($maxInputValue) - parseInt($minInputValue))) * parseInt(rangeInput) - (100 / (parseInt($maxInputValue) - parseInt($minInputValue))) * parseInt($minInputValue)
        }

        $this.on('input', '.bf-input-slider__input__min', function () {
            displayCurrentValue();
        });

        $this.on('input', '.bf-input-slider__input__max', function () {
            displayCurrentValue();
        })
    });
});