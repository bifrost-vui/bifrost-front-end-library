import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

/**
 * Description of the component InputRadioOnly
 *
 */

@Component({
  selector: 'bf-input-radio-only',
  templateUrl: './input-radio-only.component.html',
  // styleUrls: ['../scss/index.scss'],
})
export class InputRadioOnlyComponent implements OnInit {
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
    @Input() extraAttribute   : string;
    @Input() class          : string;

    ngOnInit() {
        console.log('InputRadioOnly', this);
    }
}