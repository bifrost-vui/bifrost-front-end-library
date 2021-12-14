import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

/**
 * Description of the component Dropdown
 *
 */

@Component({
  selector: 'bf-dropdown',
  templateUrl: './dropdown.component.html',
  // styleUrls: ['../scss/index.scss'],
})
export class DropdownComponent implements OnInit {
    constructor() {}

    /**
    * The inner text.
    *
    * @required
    */
    @Input() label          : string;
    @Input() isDisabled     : boolean;
    @Input() reversed       : boolean;
    @Input() dropdownItems  : Array<object>[];

    /** Class override */
    @Input() class: string;

    ngOnInit() {
        console.log('Dropdown', this);
    }
}
