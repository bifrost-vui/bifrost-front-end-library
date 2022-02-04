import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

/**
 * Description of the component InputCheckbox
 *
 */

@Component({
  selector: 'bf-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  // styleUrls: ['../scss/index.scss'],
})
export class InputCheckboxComponent implements OnInit {
    constructor() {}

    @Input() name       : string;
    /** @required */
    @Input() id         :string;
    @Input() value      :string;
    @Input() isChecked  :boolean;
    @Input() isDisabled :boolean;
    @Input() isRequired : boolean;
    @Input() isInvalid  : boolean
    /** will be used if no label is defined */
    @Input() ariaLabel  : string;
    /** Expected {text: string, class: string}*/
    @Input() label      : object;
    @Input() class      : string;

    ngOnInit() {
        console.log('InputCheckbox', this);
    }
}