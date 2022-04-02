import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bf-input-dropdown',
  templateUrl: './input-dropdown.component.html',
})
export class InputDropdownComponent implements OnInit {
    constructor() {}

    /** options: [ { label, value, isSelected } ] */
    @Input() options                : Array<object>[];

    @Input() inputId                : string;
    @Input() inputExtraAttribute    : string;
    @Input() label                  : string;
    /** See [Button Icon](?path=/docs/components-button-icon--drupal) component API. */
    @Input() labelButtonIcon        : object;
    @Input() description            : string;
    @Input() value                  : string; // ?
    @Input() placeholder            : string;
    @Input() helperText             : string;
    @Input() errorMessage           : string;
    @Input() isInvalid              : boolean;
    @Input() isDisabled             : boolean;
    @Input() isReadOnly             : boolean;

    @Input() reversed               : boolean;
    @Input() class                  : string;

    ngOnInit() {
        console.log('Input Dropdown', this);
    }
}
