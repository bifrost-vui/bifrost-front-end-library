import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bf-input-radio',
  templateUrl: './input-radio.component.html',
  // styleUrls: ['../scss/index.scss'],
})
export class InputRadioComponent implements OnInit {

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
        console.log('InputRadio', this);
    }
}