import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bf-input-dropdown',
  templateUrl: './input-dropdown.component.html',
})
export class InputDropdownComponent implements OnInit {
    constructor() {}

    @Input() inputId        : string;
    @Input() label          : string;
    @Input() placeholder    : string;
    @Input() options        : Array<object>[];
    @Input() isDisabled     : boolean;

    @Input() reversed       : boolean;
    @Input() class          : string;

    ngOnInit() {
        console.log('Input Dropdown', this);
    }
}
