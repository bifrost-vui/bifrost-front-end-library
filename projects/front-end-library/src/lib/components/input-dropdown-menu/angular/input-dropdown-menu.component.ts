import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bf-input-dropdown-menu',
  templateUrl: './input-dropdown-menu.component.html',
})
export class InputDropdownMenuComponent implements OnInit {
    constructor() {}

    /** options: [ { label, href, iconName, class } ] */
    @Input() options                : Array<object>[];

    @Input() inputId                : string;
    @Input() inputExtraAttribute    : string;
    @Input() label                  : string;
    /** See [Button Icon](?path=/docs/components-button-icon--drupal) component API. */
    @Input() labelButtonIcon        : object;
    @Input() description            : string;
    @Input() placeholder            : string;
    @Input() helperText             : string;
    @Input() errorMessage           : string;
    @Input() isInvalid              : boolean;
    @Input() isDisabled             : boolean;
    @Input() isReadOnly             : boolean;

    @Input() reversed               : boolean;
    @Input() class                  : string;

    ngOnInit() {
        console.log('Input Dropdown Menu', this);
    }
}
