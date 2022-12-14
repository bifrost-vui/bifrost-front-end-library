import $ from 'jquery';

$(function () {
    const container = $('.js-bf-input-slider');

    container.each(function (i, el) {
        const $this = $(el);
        const isRange = $this.data('range');
        const minimumGap = $this.data('minimum-gap') || 1;

        let maxValue, minValue;

        if (isRange) {
            // Inputs
            const $maxInput = $this.find('.bf-input-slider__input__max');
            const $minInput = $this.find('.bf-input-slider__input__min');
            maxValue = $minInput.attr('max');
            minValue = $minInput.attr('min');

            // Values
            let endValue = parseInt($maxInput.val());
            let startValue = parseInt($minInput.val());

            // Progress Bar
            const $progressBar = $this.find('.bf-input-slider__progress-track');

            // Labels
            const $maxLabel = $this.find('.bf-input-slider__label-max-value');
            const $minLabel = $this.find('.bf-input-slider__label-min-value');

            // clickable track
            const $track = $this.find('.bf-input-slider__panel');
            const offsetTrack = $track.offset();
            const trackStart = parseInt(offsetTrack.left);
            const trackWidth = parseInt($track.css('width'));

            updateMinSlider();
            $this.on('input', '.bf-input-slider__input__min', updateMinSlider);

            updateMaxSlider();
            $this.on('input', '.bf-input-slider__input__max', updateMaxSlider);

            $track.click(function (e) {
                const clickX =
                    parseInt(minValue) + ((parseInt(e.clientX) - trackStart) * (maxValue - minValue)) / trackWidth;

                const distMin = Math.abs(startValue - clickX);
                const distMax = Math.abs(endValue - clickX);

                if (!e.inputs) {
                    if (distMin < distMax) {
                        $minInput.val(clickX);
                        updateMinSlider();
                        updateMaxSlider();
                    } else {
                        $maxInput.val(clickX);
                        updateMinSlider();
                        updateMaxSlider();
                    }
                }
            });

            function updateMinSlider() {
                // Set value
                startValue = Math.min($minInput.val(), endValue - minimumGap);
                $minInput.val(startValue);

                // Set label
                $minLabel.html(startValue);

                // Update Progress Bar
                const startHandlePosition = calculPosition(startValue);
                $progressBar.css('left', startHandlePosition + '%');
            }

            function updateMaxSlider(clickX) {
                // Set value
                endValue = Math.max($maxInput.val(), startValue + minimumGap);
                $maxInput.val(endValue);

                // Set label
                $maxLabel.html(endValue);

                // Update Progress Bar
                const endHandlePosition = calculPosition(endValue);
                $progressBar.css('right', 100 - endHandlePosition + '%');
            }
        } else {
            const isInverted = $this.data('inverted');

            // Inputs
            const $input = $this.find('.bf-input-slider__input');
            maxValue = $input.attr('max');
            minValue = $input.attr('min');

            // Overlay
            const $handle = $this.find('.bf-input-slider__handle');
            const $progressBar = $this.find('.bf-input-slider__progress-track');
            const $label = $handle.find('.bf-input-slider__label__value');

            if (isInverted) {
                $progressBar.css('right', '0%');
            }

            updateSlider();
            $this.on('input', '.bf-input-slider__input', function () {
                updateSlider();
            });

            function updateSlider() {
                // Set value
                const startValue = $input.val();
                $input.val(startValue);

                // Set label
                $label.html(startValue);
                const startHandlePosition = calculPosition(startValue);
                $handle.css('left', startHandlePosition + '%');

                // Set styles
                if (isInverted) {
                    $progressBar.css('left', startHandlePosition + '%');
                } else {
                    $progressBar.css('width', startHandlePosition + '%');
                }
            }
        }

        function calculPosition(value) {
            return ((value - minValue) * 100) / (maxValue - minValue);
        }
    });
});
