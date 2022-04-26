import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bf-input-password',
  templateUrl: './input-password.component.html',
})
export class InputPasswordComponent implements OnInit {
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

    @Input() minlength              : number;
    @Input() maxlength              : number;
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
        console.log('Input Password', this);
    }
}
