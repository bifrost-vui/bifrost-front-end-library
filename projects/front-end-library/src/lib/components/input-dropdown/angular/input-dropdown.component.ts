import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bf-input-dropdown',
  templateUrl: './input-dropdown.component.html',
})
export class InputDropdownComponent implements OnInit {
    constructor() {}

    /** Options required: `[{ label, value }]` If `isNative` is false, options can pass an array of [Buttons](?path=/docs/components-button--drupal). */
    @Input() options                : Array<object>[];
    @Input() isNative               : boolean;

    // Inputs commons to all inputs:
    @Input() value                  : string;
    @Input() placeholder            : string;
    @Input() label                  : string;
    /** See [Button Icon](?path=/docs/components-button-icon--drupal) component API. */
    @Input() labelButtonIcon        : object;
    @Input() description            : string;
    @Input() helperText             : string;
    @Input() errorMessage           : string;
    /** `isRequired` works only if `isNative` is true. */
    @Input() isRequired             : boolean;
    @Input() isAutofocus            : boolean;
    @Input() isInvalid              : boolean;
    @Input() isDisabled             : boolean;
    @Input() isReadOnly             : boolean;
    @Input() inputId                : string;
    @Input() inputName              : string;
    @Input() inputExtraAttribute    : string;

    @Input() reversed               : boolean;
    @Input() class                  : string;

    ngOnInit() {
        console.log('Input Dropdown', this);
    }
}
