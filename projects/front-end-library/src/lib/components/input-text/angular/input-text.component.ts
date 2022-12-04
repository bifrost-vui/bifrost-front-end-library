import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bf-input-text',
  templateUrl: './input-text.component.html',
})
export class InputTextComponent implements OnInit {
    constructor() {}

    @Input() value                  : string;
    @Input() placeholder            : string;
    @Input() label                  : string;
    /** See [Button Icon](?path=/docs/components-button-icon--drupal) component API. */
    @Input() labelButtonIcon        : object;
    @Input() description            : string;
    /** HTML string. 3 visible characters maximum. */
    @Input() adornment              : string;
    @Input() helperText             : string;
    @Input() errorMessage           : string;
    @Input() ariaLabel              : string;
    @Input() title                  : string;

    @Input() type                   : string;
    @Input() minlength              : number;
    @Input() maxlength              : number;
    @Input() pattern                : string;
    @Input() isRequired             : boolean;
    @Input() isAutofocus            : boolean;
    @Input() isInvalid              : boolean;
    @Input() isDisabled             : boolean;
    @Input() isReadOnly             : boolean;
    @Input() isAutocomplete         : string;
    @Input() inputId                : string;
    @Input() inputName              : string;
    @Input() inputExtraAttribute    : string;

    @Input() reversed               : boolean;
    @Input() class                  : string;

    ngOnInit() {
        console.log('Input Text', this);
    }
}
