import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';


@Component({
  selector: 'bf-switch',
  templateUrl: './switch.component.html',
  // styleUrls: ['../scss/index.scss'],
})
export class SwitchComponent implements OnInit {
    constructor() {}


    @Input() inputId        : string;
    @Input() inputName      : string;
    /** Make sure to define aria-label (labelOn or labelOff are not labels) */
    @Input() ariaLabel      : string;
    @Input() isDisabled     : boolean;
    @Input() isChecked      : boolean;
    @Input() isInvalid      : boolean;
    /** */
    @Input() labelOn        : string;
    @Input() labelOff       : string;
    /** sets the font-size on the text inside the switch */
    @Input() inputSize      : 'sm'|'lg';
    @Input() extraAttribute : string;
    @Input() class          : string;

    ngOnInit() {
        console.log('Switch', this);
    }
}