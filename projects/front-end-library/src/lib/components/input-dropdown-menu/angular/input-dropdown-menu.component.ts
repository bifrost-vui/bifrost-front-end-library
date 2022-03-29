import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bf-input-dropdown-menu',
  templateUrl: './input-dropdown-menu.component.html',
})
export class InputDropdownMenuComponent implements OnInit {
    constructor() {}

    @Input() inputId        : string;
    @Input() label          : string;
    @Input() options        : Array<object>[];
    @Input() isDisabled     : boolean;

    @Input() reversed       : boolean;
    @Input() class          : string;

    ngOnInit() {
        console.log('Input Dropdown Menu', this);
    }
}
