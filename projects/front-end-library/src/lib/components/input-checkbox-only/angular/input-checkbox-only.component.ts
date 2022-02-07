import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bf-input-checkbox-only',
  templateUrl: './input-checkbox-only.component.html',
  // styleUrls: ['../scss/index.scss'],
})
export class InputCheckboxOnlyComponent implements OnInit {
    constructor() {}

    @Input() name           : string;
    /** @required */
    @Input() id             :string;
    @Input() value          :string;
    @Input() isChecked      :boolean;
    @Input() isDisabled     :boolean;
    @Input() isRequired     : boolean;
    @Input() isInvalid      : boolean
    /** will be used if no label is defined */
    @Input() ariaLabel      : string;
    /** Expected {text: string, class: string}*/
    @Input extraAttribute   : string;
    @Input() class          : string;

    ngOnInit() {
        console.log('InputCheckboxOnly', this);
    }
}