import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IButton } from './api.model';

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */

@Component({
    selector: 'bf-button',
    templateUrl: './button.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class ButtonComponent implements IButton, OnInit {
    constructor() {}

    /** <span style="color: orange;">__Optional__</span> */
    @Input() ariaControls: string;
    /** <span style="color: orange;">__Optional__</span> */
    @Input() ariaExpanded: string;
    /** <span style="color: orange;">__Optional__</span> */
    @Input() ariaLabel: string;
    /** <span style="color: orange;">__Optional__</span> */
    @Input() class: string;
    /** <span style="color: orange;">__Optional__</span> */
    @Input() dataDismiss: string;
    /** <span style="color: orange;">__Optional__</span> */
    @Input() dataToggle: string;
    /** <span style="color: orange;">__Optional__</span> */
    @Input() dataTarget: string;
    /** <span style="color: orange;">__Optional__</span> */
    @Input() extraAttribute: string;
    /** <span style="color: orange;">__Optional__</span> */
    @Input() formAction: string;
    /** <span style="color: orange;">__Optional__</span> */
    @Input() formEncryptionType: null | 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
    /** <span style="color: orange;">__Optional__</span> */
    @Input() formId: string;
    /** <span style="color: orange;">__Optional__</span> */
    @Input() formMethod: string;
    /** <span style="color: orange;">__Optional__</span> */
    @Input() formNoValidate: boolean;
    /** <span style="color: orange;">__Optional__</span> */
    @Input() formTarget: null | '_self' | '_blank' | '_parent' | '_top';
    /** <span style="color: orange;">__Optional__</span> */
    @Input() fullWidth: boolean;
    /** <span style="color: orange;">__Optional__</span> */
    @Input() hierarchy: 'primary' | 'primary-alt' | 'secondary' | 'tertiary' = 'secondary';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * A button will become a link if `href` is defined.
     */
    @Input() href: string;
    /** <span style="color: orange;">__Optional__</span> */
    @Input() iconName: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Only have effect if `iconName` is filled.
     */
    @Input() iconPosition: 'left' | 'right' = 'left';
    /** <span style="color: orange;">__Optional__</span> */
    @Input() id: string;
    /** <span style="color: orange;">__Optional__</span> */
    @Input() isDisabled: boolean;
    /** <span style="color: orange;">__Optional__</span> */
    @Input() isLoading: boolean;
    /** <span style="color: orange;">__Optional__</span> */
    @Input() isSubmit: boolean;
    /**
     * <span style="color: red;">__Required__</span>
     *
     * @required
     */
    @Input() label: string;

    ngOnInit() {
        console.log('button', this);
    }
}
