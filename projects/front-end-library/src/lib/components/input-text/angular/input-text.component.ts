import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bf-input-text',
  templateUrl: './input-text.component.html',
})
export class InputTextComponent implements OnInit {
    constructor() {}

    @Input() inputId                : string;
    @Input() inputExtraAttribute    : string;
    @Input() label                  : string;
    /** See [Button Icon](?path=/docs/components-button-icon--drupal) component API. */
    @Input() labelButtonIcon        : object;
    @Input() description            : string;
    @Input() value                  : string;
    @Input() placeholder            : string;
    /** HTML string. 3 visible characters maximum. */
    @Input() adornment              : string;
    @Input() helperText             : string;
    @Input() errorMessage           : string;
    @Input() isInvalid              : boolean;
    @Input() isDisabled             : boolean;
    @Input() isReadOnly             : boolean;

    @Input() reversed               : boolean;
    @Input() class                  : string;

    ngOnInit() {
        console.log('Input Text', this);
    }
}
