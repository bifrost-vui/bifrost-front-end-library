import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bf-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  // styleUrls: ['../scss/index.scss'],
})
export class InputCheckboxComponent implements OnInit {
    constructor() {}

    /** @required */
    @Input() inputId            : string;
    @Input() inputName          : string;
    @Input() value              : string;
    @Input() isChecked          : boolean;
    @Input() isDisabled         : boolean;
    @Input() isRequired         : boolean;
    @Input() isInvalid          : boolean;
    @Input() extraAttribute     : string;
    @Input() label              : string;
    @Input() labelClass         : string;
    @Input() labelExtraAttribute: string;
    /** Needs to be defined if no label is defined */
    @Input() ariaLabel          : string;
    @Input() class              : string;

    ngOnInit() {
        console.log('InputCheckbox', this);
    }
}