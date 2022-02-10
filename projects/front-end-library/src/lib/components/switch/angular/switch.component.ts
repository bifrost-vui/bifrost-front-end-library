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
    /** Make sure to define an aria-label describing what the switch is for (not the same as labelOn or labelOff) */
    @Input() ariaLabel      : string;
    @Input() isDisabled     : boolean;
    @Input() isChecked      : boolean;
    @Input() isInvalid      : boolean;
    /** */
    @Input() labelOn        : string;
    @Input() labelOff       : string;
    /** set the font-size on the text inside the switch */
    @Input() size           : 'sm'|'lg';
    @Input() extraAttribute : string;
    @Input() class          : string;

    ngOnInit() {
        console.log('Switch', this);
    }
}