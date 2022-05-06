import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bf-input-radio-option',
  templateUrl: './input-radio-option.component.html',
})
export class InputRadioOptionComponent implements OnInit {

    constructor() {}

    @Input() name: string;
    /** @required */
    @Input() id: string;
    @Input() value: string;
    @Input() isChecked: boolean;
    @Input() isDisabled: boolean;
    @Input() isRequired: boolean;
    @Input() isInvalid: boolean;
    @Input() label: string;
    @Input() labelClass: string;
    /** Needs to be defined if no label is defined */
    @Input() ariaLabel: string;
    @Input() extraAttribute: string;
    @Input() class: string;

    ngOnInit() {
        console.log('InputRadioOption', this);
    }
}