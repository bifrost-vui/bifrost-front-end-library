import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-input-switch',
    templateUrl: './input-switch.component.html',
    // styleUrls: ['../scss/index.scss'],
})
export class InputSwitchComponent implements OnInit {
    constructor() {}

    @Input() id: string;
    @Input() name: string;

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
    @Input() ariaLabel: string;
    @Input() ariaLabelledby: string;

    @Input() isDisabled: boolean;
    @Input() isChecked: boolean;
    @Input() extraAttribute: string;

    @Input() class: string;

    ngOnInit() {
        console.log('InputSwitch', this);
    }
}
