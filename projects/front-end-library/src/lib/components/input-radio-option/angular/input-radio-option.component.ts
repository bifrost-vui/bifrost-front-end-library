import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-input-radio-option',
    templateUrl: './input-radio-option.component.html',
})
export class InputRadioOptionComponent implements OnInit {
    constructor() {}

    /** @required */
    @Input() id: string;
    @Input() name: string;
    @Input() value: string;
    @Input() isChecked: boolean;
    @Input() label: HTMLElement;
    @Input() labelClass: string;
    @Input() isRequired: boolean;
    @Input() isDisabled: boolean;
    @Input() isInvalid: boolean;
    /** Needs to be defined if no label is defined */
    @Input() ariaLabel: string;
    @Input() extraAttribute: string;
    @Input() class: string;

    ngOnInit() {
        console.log('InputRadioOption', this);
    }
}
