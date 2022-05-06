import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-input-checkbox-option',
    templateUrl: './input-checkbox-option.component.html',
})
export class InputCheckboxOptionComponent implements OnInit {
    constructor() {}

    /** @required */
    @Input() id: string;
    @Input() name: string;
    @Input() value: boolean;
    @Input() label: HTMLElement;
    @Input() labelClass: string; // TODO: remove?
    @Input() labelExtraAttribute: string; // TODO: remove?
    @Input() isRequired: boolean;
    @Input() isDisabled: boolean;
    @Input() isInvalid: boolean;
    /** Needs to be defined if label is not defined. */
    @Input() ariaLabel: string;

    @Input() extraAttribute: string;
    @Input() class: string;

    ngOnInit() {
        console.log('InputCheckboxOption', this);
    }
}