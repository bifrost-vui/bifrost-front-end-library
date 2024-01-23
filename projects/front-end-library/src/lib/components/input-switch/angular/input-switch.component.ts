import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-input-switch',
    templateUrl: './input-switch.component.html',
    // styleUrls: ['../scss/index.scss'],
})
export class InputSwitchComponent implements OnInit {
    constructor() {}

    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - `aria-label` is an accessibility attribute.
     * - Descriptive text that labels an interactive element.
     * - The value of this property is the text that will be used in the attribute.
     */
    @Input() ariaLabel: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - `aria-labelledby` is an accessibility attribute.
     * - It is used by screen reader to know which element is labelling this element.
     * - The value of this property has to be the `id` attribute of the text element
         that will be use as a "label" for this input.
     * - If there is no value in `ariaLabel`, then this property needs to be filled.
     */
    @Input() ariaLabelledby: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on the switch main element (`label` tag).
     */
    @Input() class: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Extra attributes on the `input` element.
     * - It can be a `string` of attributes: `'data-test="value" data-test2="value2"'`
     * - Or it can be an object of attributes name and their values, example:
     *
     * <pre>
     *     <code>
     *        {
     *          "data-example-1": "exampleValue-1",
     *          "data-example-2": "exampleValue-2",
     *        }
     *     </code>
     * </pre>
     */
    @Input() extraAttribute: string;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * - Input Switch main element's `id` attribute.
     * - Needed to differentiate with other Input Switch items.
     *
     * @required
     */
    @Input() id: string;
    @Input() isDisabled: boolean;
    @Input() isChecked: boolean;
    /** Object expected format:
     * <pre>
     *     <code>
     *        {
     *          "text": `string`,
     *          "position": `"right"` | `"left"`,
     *          "class": `string`
     *        }
     *     </code>
     * </pre>
     *
     * - You can pass directly the `label` as a **string** or an **object** (see above).
     * - The object accepts the `text`, `class` and `position` (`left | right`) properties.
     * - The label default position is left.
     */
    @Input() label: object;
    @Input() name: string;

    ngOnInit() {
        console.log('InputSwitch', this);
    }
}
