import { Component, Input } from '@angular/core';
import { IInputSliderMinMax } from './api.model';

@Component({
    selector: '',
})
export class InputSliderMinMaxAPI implements IInputSliderMinMax {
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Text in bold under the `legend`.
     * - Will be on the left side if it is for a `min` value.
     * - Will be on the right side if it is for a `max` value.
     */
    @Input() description: string;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * `id` attribute of the `<input>`.
     *
     * @required
     */
    @Input() inputId: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Text displayed just under the progression track.
     * - Will be on the __left side__ if used in the component `min` property.
     * - Will be on the __right side__ if used in the component `max` property.
     */
    @Input() legend: string;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * - It will define the __minimum__ value permitted by the slider(s) if used in the component `min` property.
     * - It will define the __maximum__ value permitted by the slider(s) if used in the component `max` property.
     *
     * @required
     */
    @Input() value: number = 0;
}
