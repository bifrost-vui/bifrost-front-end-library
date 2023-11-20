import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { IInputSliderMinMax } from './api.model';

@Component({
    selector: 'bf-input-slider',
    templateUrl: './input-slider.component.html',
    // styleUrls: ['../scss/index.scss'],
})
export class InputSliderComponent implements OnInit {
    constructor() {}

    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on input slider main element.
     */
    @Input() class: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Change the position of the progression track.
     * - Has no effect on a slider with two handles.
     */
    @Input() isInverted: boolean;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * - This will be used to:
     *   - set the maximum value permitted by the slider;
     *   - display a legend and a description, if provided, below the progression track on the __right side__ of the component;
     *   - if it is a __two handles__ slider, set an `id` attribute on the second `<input>` used for the second value.
     * - See `IInputSliderMinMax`
     *    <a href="/?path=/docs/components-input-slider-api--page#iinputsliderminmax-api" target="_blank">API</a>
     *    and <a href="/?path=/docs/components-input-slider-api--page#iinputsliderminmax-format" target="_blank">expected format</a>.
     *
     * @required
     */
    @Input() max: IInputSliderMinMax;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * - This will be used to:
     *   - set the minimum value permitted by the slider;
     *   - display a legend and a description, if provided, below the progression track on the __left side__ of the component;
     *   - set an `id` attribute on the `<input>`;
     *   - if it is a __two handles__ slider, set an `id` attribute on the first `<input>` used for the first value.
     * - See `IInputSliderMinMax`
     *    <a href="/?path=/docs/components-input-slider-api--page#iinputsliderminmax-api" target="_blank">API</a>
     *    and <a href="/?path=/docs/components-input-slider-api--page#iinputsliderminmax-format" target="_blank">expected format</a>.
     *
     * @required
     */
    @Input() min: IInputSliderMinMax;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Minimal gap between two values of a range.
     * - Has no effect on a slider with one handle.
     */
    @Input() minimumGap: number;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Is the component color scheme reversed?
     */
    @Input() reversed: boolean;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Step between each value when moving the slider's handle(s).
     */
    @Input() step: number;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Text beside the `value` above an handle.
     * - For example, for a price it could be `$`.
     */
    @Input() unitLabel: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Set the position of `unitLabel` in relation to the `value`.
     */
    @Input() unitPosition: 'start' | 'end';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Can be a simple number or an array of, maximum, two numbers.
     * - Set the base value(s) of the `<input>(s)`.
     * - Set the base number(s):
     *   - One handle: above the handle.
     *   - Two handles: above the progression track.
     *     - Minimum on the left.
     *     - Maximum on the right.
     */
    @Input() value: number | number[];

    ngOnInit() {
        console.log('InputSlider', this);
    }
}
