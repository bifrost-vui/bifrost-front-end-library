import $ from 'jquery';

$(function() {
    const container = $('.js-bf-input-slider');

    container.each(function(i, el) {

        const $this     = $(el);
        const isRange   = $this.data('range');

        let maxValue, minValue;

        if (isRange) {
            // Inputs
            const $maxInput     = $this.find('.bf-input-slider__input__max');
            const $minInput     = $this.find('.bf-input-slider__input__min');
            maxValue            = $minInput.attr('max');
            minValue            = $minInput.attr('min');

            // Values
            let endValue        = parseInt($maxInput.val());
            let startValue      = parseInt($minInput.val());
            
            // Progress Bar
            const $progressBar  = $this.find('.bf-input-slider__progress-track');

            // Handles
            const $handles      = $this.find('.bf-input-slider__handles');
            const $handleMin    = $this.find('.bf-input-slider__handle--min');
            const $handleMax    = $this.find('.bf-input-slider__handle--max');
            const $maxLabel     = $handleMax.find('.bf-input-slider__label__value');
            const $minLabel     = $handleMin.find('.bf-input-slider__label__value');
            let isLabelMerged   = false;
            
            updateMinSlider();
            $this.on('input', '.bf-input-slider__input__min', updateMinSlider);

            updateMaxSlider();
            $this.on('input', '.bf-input-slider__input__max', updateMaxSlider);

            function updateMinSlider() {
                // Set value
                startValue = Math.min($minInput.val(), endValue);
                $minInput.val(startValue);

                // Set label
                $minLabel.html(startValue);
                const startHandlePosition = calculPosition(startValue);
                $handleMin.css('left', startHandlePosition + '%');

                // Update Progress Bar
                $progressBar.css('left', startHandlePosition + '%');

                mergeLabelsIfclose(startHandlePosition);
            }

            function updateMaxSlider() {
                // Set value
                endValue = Math.max($maxInput.val(), startValue);
                $maxInput.val(endValue);

                // Set label
                $maxLabel.html(endValue);
                const endHandlePosition = calculPosition(endValue);
                $handleMax.css('left', endHandlePosition + '%');

                // Update Progress Bar
                $progressBar.css('right', (100 - endHandlePosition) + '%');
                
                mergeLabelsIfclose(endHandlePosition);
            }

            function mergeLabelsIfclose(position) {
                const progressBarWidth = $progressBar.width();
                if (progressBarWidth < 50) {
                    isLabelMerged = true;
                    const progressBarLeft = $progressBar.position().left;
                    $handles.addClass('bf-input-slider__handles--merged');
                    $handles.css('left', progressBarLeft + progressBarWidth/2 + 'px');
                } else if (isLabelMerged) {
                    isLabelMerged = false;
                    $handles.removeClass('bf-input-slider__handles--merged');
                    $handles.css('left', 'auto');
                }
            }
        } else {
            const isInverted   = $this.data('inverted');

            // Inputs
            const $input        = $this.find('.bf-input-slider__input');
            maxValue            = $input.attr('max');
            minValue            = $input.attr('min');

            // Overlay
            const $handle       = $this.find('.bf-input-slider__handle');
            const $progressBar  = $this.find('.bf-input-slider__progress-track');
            const $label        = $handle.find('.bf-input-slider__label__value');

            if (isInverted) {
                $progressBar.css('right', '0%');
            }

            updateSlider();
            $this.on('input', '.bf-input-slider__input', function() { updateSlider() });

            function updateSlider() {
                // Set value
                const startValue = $input.val();
                $input.val(startValue);

                // Set label
                $label.html(startValue);
                const startHandlePosition = calculPosition(startValue);
                $handle.css('left', startHandlePosition + '%');

                // Set styles
                if(isInverted)
                {
                    $progressBar.css('left', startHandlePosition + '%');
                } else {
                    $progressBar.css('width', startHandlePosition + '%');    
                }
                
            }
        }

        function calculPosition(value) {
            return (value - minValue) * 100 / (maxValue - minValue);
        }

    });
});
