import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */
@Component({
    selector: 'bf-button-icon',
    templateUrl: './button-icon.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class ButtonIconComponent implements OnInit {
    constructor() {}

    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - `aria-controls` is an accessibility attribute.
     * - It is used by screen reader to know which element this button is controlling.
     * - It will normally be the same as the `id` of the targeted element.
     */
    @Input() ariaControls: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - `aria-expanded` is an accessibility attribute.
     * - It is used by screen reader to know if a control is expanded or collapsed,
         and whether or not the controlled elements are displayed or hidden.
     * - The only two possible values : `true` or `false`.
     */
    @Input() ariaExpanded: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - `aria-label` is an accessibility attribute.
     * - Descriptive text that labels an interactive element.
     * - If there is no value for this property, then the `label` will be used.
     */
    @Input() ariaLabel: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Text inside the badge.
     */
    @Input() badgeLabel: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on the button element.
     */
    @Input() buttonClass: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on Button Icon main element.
     */
    @Input() class: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Bootstrap functionality.
     * - Needed only if this button is used to close an "alert" or a "modal".
     * - The only two possible values : `alert` or `modal`.
     */
    @Input() dataDismiss: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Bootstrap functionality.
     * - Works only when used with `data-toggle="collapse"`.
     * - The value of this property is the target element's CSS selector.
     */
    @Input() dataTarget: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Bootstrap functionality.
     * - This value of this property indicates to the button what is its purpose.
     * - The only possible values are : `collapse`, `dropdown`, `modal`, `tab`, `tooltip`.
     */
    @Input() dataToggle: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Extra attributes on the component main element.
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
    @Input() extraAttribute: string | object;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * A button will become a link if `href` is defined as long as it's not disabled.
     */
    @Input() href: string;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * - The name of the icon inside the button.
     * - See [Icons - Interface List](/?path=/story/components-icon--drupal-interface)
         or [Icons - Illustration List](/?path=/story/components-icon--drupal-illustration) for icon names.
     *
     * @required
     */
    @Input() icon: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * If `true`, the button will be disabled.
     */
    @Input() isDisabled: boolean;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * - Put the value in a `data-title` attribute.
     * - This `data-title` attribute is for SEO.
     *
     * @required
     */
    @Input() label: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * The button's size.
     */
    @Input() size: 'small' | 'medium' = 'medium';

    ngOnInit() {
        console.log('button-icon', this);
    }
}
