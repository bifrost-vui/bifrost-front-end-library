import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-input-submit',
    templateUrl: './input-submit.component.html',
})
export class InputSubmitComponent implements OnInit {
    constructor() {}

    @Input() label: string;
    @Input() id: string;
    @Input() ariaLabel: string;
    @Input() hierarchy: null | 'primary' | 'primary-alt' | 'secondary' | 'tertiary';
    @Input() iconName: string;
    @Input() iconPosition: null | 'left' | 'right';
    @Input() fullWidth: boolean;

    @Input() isDisabled: boolean;
    @Input() autofocus: boolean;

    @Input() formId: string;
    @Input() formAction: string;
    @Input() formEncryptionType: null | 'application/x-www-form-urlencoded' |'multipart/form-data' | 'text/plain';
    @Input() formTarget: null | '_self' | '_blank' | '_parent' | '_top';
    @Input() formMethod: string;
    @Input() formNoValidate:boolean;


    @Input() extraAttribute: string;
    @Input() class: string;

    ngOnInit() {
        console.log('InputSubmit', this);
    }
}