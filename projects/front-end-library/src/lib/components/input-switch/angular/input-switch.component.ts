import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';


@Component({
  selector: 'bf-input-switch',
  templateUrl: './input-switch.component.html',
  // styleUrls: ['../scss/index.scss'],
})
export class InputSwitchComponent implements OnInit {
    constructor() {}


    @Input() id             : string;
    @Input() name           : string;
    /** Make sure to define aria-label (`labelOn` and `labelOff` are not HTML labels) */
    @Input() ariaLabel      : string;
    @Input() isDisabled     : boolean;
    @Input() isChecked      : boolean;
    @Input() extraAttribute : string;
    @Input() class          : string;

    ngOnInit() {
        console.log('InputSwitch', this);
    }
}