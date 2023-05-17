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

    @Input() ariaControls: string;
    @Input() ariaExpanded: string;
    @Input() ariaLabel: string;
    @Input() badgeLabel: string;
    /** Classes for `<button>` tag. */
    @Input() buttonClass: string;
    @Input() class: string;
    @Input() dataDismiss: string;
    @Input() dataTarget: string;
    @Input() dataToggle: string;
    /**
     * Can be a simple **string** or an **object**
     *
     * _**String**_
     *
     * Must be between double-quotes ("), so use single-quotes (') for attributes.
     * <pre>
     *    <code>
     *        "id='lorem_ipsum' style='display: flex;'"
     *    </code>
     * </pre>
     *
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
    /** A button will become a link if `href` is defined as long as it's not disabled. */
    @Input() href: string;
    @Input() icon: string;
    @Input() isDisabled: boolean;
    /** Display a `data-title` attribute.  */
    @Input() label: string;

    ngOnInit() {
        console.log('button-icon', this);
    }
}
