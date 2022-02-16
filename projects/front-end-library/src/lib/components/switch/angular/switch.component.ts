import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';


@Component({
  selector: 'bf-switch',
  templateUrl: './switch.component.html',
  // styleUrls: ['../scss/index.scss'],
})
export class SwitchComponent implements OnInit {
    constructor() {}


    @Input() id             : string;
    @Input() name           : string;
    /** Make sure to define aria-label (`labelOn` and `labelOff` are not HTML labels) */
    @Input() ariaLabel      : string;
    @Input() isDisabled     : boolean;
    @Input() isChecked      : boolean;
    @Input() isInvalid      : boolean;
    /** (UI-Kit legacy) Prevents labels display when `labelOn` and `labelOff` are defined <br> leaving the labels undefined has the same result */
    @Input() hasNolabel     : boolean;
    @Input() labelOn        : string;
    @Input() labelOff       : string;
    /** Sets the font-size of `labelOn` and `labelOff` */
    @Input() size           : 'sm'|'lg';
    @Input() extraAttribute : string;
    @Input() class          : string;

    ngOnInit() {
        console.log('Switch', this);
    }
}