import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-input-checkbox-option',
    templateUrl: './input-checkbox-option.component.html',
})
export class InputCheckboxOptionComponent implements OnInit {
    constructor() {}

    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - `aria-label` is an accessibility attribute.
     * - Needs to be defined if `label` property is not defined.
     * - It is used by a screen reader to tell the user what is the label of this checkbox.
     */
    @Input() ariaLabel: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on component main element.
     */
    @Input() class: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Extra attributes on the `<input>` element.
     * - Can be a simple **string** or an **object**
     *
     * <br>
     * _**String**_
     *
     * Must be between double-quotes ("), so use single-quotes (') for attributes.
     * <pre>
     *    <code>
     *        "onclick='alert(\`lorem ipsum\`);' style='display: flex;'"
     *    </code>
     * </pre>
     * <br><br>
     * _**Object**_
     * <pre>
     *    <code>
     *        {
     *            "data-test-1": "test-1",
     *            "data-test-2": "test-2"
     *        }
     *    </code>
     * </pre>
     */
    @Input() extraAttribute: string | object;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * `<input>` element `id` attribute.
     *
     * @required
     */
    @Input() id: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Is the checkbox item checked?
     */
    @Input() isChecked: boolean = false;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Is the checkbox item disabled?
     */
    @Input() isDisabled: boolean = false;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Is the checkbox item invalid (in error)?
     */
    @Input() isInvalid: boolean = false;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Is the checkbox item required?
     */
    @Input() isRequired: boolean = false;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Text on the right of the `<input>` element.
     */
    @Input() label: string | HTMLElement;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on `<label>` element.
     */
    @Input() labelClass: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Extra attributes on the `<span>` element that contains the label text.
     * - Can be a simple **string** or an **object**
     *
     * <br>
     * _**String**_
     *
     * Must be between double-quotes ("), so use single-quotes (') for attributes.
     * <pre>
     *    <code>
     *        "style='color: blue;'"
     *    </code>
     * </pre>
     * <br><br>
     * _**Object**_
     * <pre>
     *    <code>
     *        {
     *            "data-test-1": "test-1",
     *            "data-test-2": "test-2"
     *        }
     *    </code>
     * </pre>
     */
    @Input() labelExtraAttribute: string | object;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * This value will be put in the `name` attribute on the `<input>` element.
     */
    @Input() name: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * This value will be put in the `value` attribute on the `<input>` element.
     */
    @Input() value: string;

    ngOnInit() {
        console.log('InputCheckboxOption', this);
    }
}
