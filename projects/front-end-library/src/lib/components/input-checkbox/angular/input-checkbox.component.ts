import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-input-checkbox',
    templateUrl: './input-checkbox.component.html',
    // styleUrls: ['../scss/index.scss'],
})
export class InputCheckboxComponent implements OnInit {
    constructor() {
    }

    /** @required */
    @Input() id: string;
    /** Will transform the checkbox into a radio button displaying a checkmark when checked. See usage in [Selection Tiles](/?path=/story/components-selection-tile--drupal-selection-tile-horizontal) */
    @Input() type: 'checkbox' | 'radio'
    @Input() name: string;
    @Input() value: string;
    @Input() isChecked: boolean;
    @Input() isDisabled: boolean;
    @Input() isInvalid: boolean;
    @Input() isRequired: boolean;
    @Input() extraAttribute: string;
    @Input() label: HTMLElement;
    @Input() labelClass: string;
    /** Needs to be defined if no label is defined */
    @Input() ariaLabel: string;
    @Input() class: string;

    ngOnInit() {
        console.log('InputCheckbox', this);
    }
}