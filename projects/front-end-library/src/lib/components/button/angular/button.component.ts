import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */

@Component({
    selector: 'bf-button',
    templateUrl: './button.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class ButtonComponent implements OnInit {
    constructor() {}

    @Input() id: string;
    @Input() label: string;
    /** A button will become a link if `href` is defined. */
    @Input() href: string;
    @Input() hierarchy: null | 'primary' | 'primary-alt' | 'secondary' | 'tertiary';
    @Input() isDisabled: boolean;
    @Input() isLoading: boolean;
    @Input() fullWidth: boolean;

    @Input() iconName: string;
    /** Only have effect if `iconName` is filled. */
    @Input() iconPosition: null | 'left' | 'right';

    @Input() dataDismiss: string;
    @Input() dataToggle: string;
    @Input() dataTarget: string;
    @Input() ariaControls: string;
    @Input() ariaExpanded: string;
    @Input() ariaLabel: string;
    @Input() extraAttribute: string;
    @Input() class: string;

    @Input() isSubmit: boolean;
    @Input() formId: string;
    @Input() formAction: string;
    @Input() formEncryptionType: null | 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
    @Input() formTarget: null | '_self' | '_blank' | '_parent' | '_top';
    @Input() formMethod: string;
    @Input() formNoValidate: boolean;

    ngOnInit() {
        console.log('button', this);
    }
}
