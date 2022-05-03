import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-input-checkbox-control',
    templateUrl: './input-checkbox-control.component.html',
})
export class InputCheckboxControlComponent implements OnInit {
    constructor() {}

    /** @required */
    @Input() id: string;
    @Input() name: string;
    @Input() value: string;
    @Input() isChecked: boolean;
    @Input() isDisabled: boolean;
    @Input() isInvalid: boolean;
    @Input() isRequired: boolean;
    @Input() extraAttribute: string;
    @Input() label: string;
    @Input() labelClass: string;
    @Input() labelExtraAttribute: string;
    /** Needs to be defined if no label is defined */
    @Input() ariaLabel: string;
    @Input() class: string;

    ngOnInit() {
        console.log('InputCheckboxControl', this);
    }
}