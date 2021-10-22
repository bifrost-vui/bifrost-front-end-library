import $ from 'jquery';

$(function() {
    const container = $('.js-bf-input-range');

    container.each(function (i, el) {
        const $this = $(el),
        //inputs
        $minRangeInput = $this.find('.bf-input-range_input_min'),
        $maxRangeInput = $this.find('.bf-input-range_input_max'),
        //inputs attributes
        $minInputValue = $minRangeInput.attr('min'),
        $maxInputValue = $minRangeInput.attr('max'),
        $unit = $minRangeInput.attr('data-unit'),
        //overlay divs
        $excludeLeft = $this.find('.bf-input-range_exclude--left'),
        $excludeRight = $this.find('.bf-input-range_exclude--right'),
        $rangeValue = $this.find('.bf-input-range_value'),
        $handleLeft = $this.find('.bf-input-range_handle--left'),
        $handleRight = $this.find('.bf-input-range_handle--right'),
        //labels
        $minLabel = $this.find('.bf-input-range_handle--left .bf-input-range_label'),
        $maxLabel = $this.find('.bf-input-range_handle--right .bf-input-range_label');

        let suffix = '';
        let prefix = '';

        if ($unit == '$' && $this.attr('lang') == 'en'){
            prefix = $unit
        } else {
            suffix = $unit
        }

        setInitialRangeValues ();
        displayCurrentValue();

        function setInitialRangeValues() {
            const min = $minRangeInput.val();
            const max = $maxRangeInput.val();
            $minLabel.html(prefix + min + suffix);
            $maxLabel.html(prefix + max + suffix);
        }

        function displayCurrentValue() {
            const min = doTheMath($minRangeInput.val());
            const max = doTheMath($maxRangeInput.val());
            $minLabel.html(prefix + $minRangeInput.val() + suffix);
            $maxLabel.html(prefix + $maxRangeInput.val() + suffix);
            $excludeLeft.css('width', min + '%');
            $excludeRight.css('width', (100 - max) + '%');
            $rangeValue.css('left', min + '%').css('right', (100 - max) + '%');
            $handleLeft.css('left', min + '%');
            $handleRight.css('right', (100 - max) + '%');
        }

        function doTheMath(rangeInput){
            return (100/(parseInt($maxInputValue) - parseInt($minInputValue))) * parseInt(rangeInput) - (100/(parseInt($maxInputValue) - parseInt($minInputValue))) * parseInt($minInputValue)
        }

        $this.on('input', '.bf-input-range_input_min', function() {
            displayCurrentValue();
        });

        $this.on('input', '.bf-input-range_input_max', function(){
            displayCurrentValue();
        })
    });
});