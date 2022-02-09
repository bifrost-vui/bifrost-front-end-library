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
    @Input() ariaLabel      : string;
    @Input() isDisabled     : boolean;
    @Input() isChecked      : boolean;
    @Input() isInvalid      : boolean;
    /** Display labels inside the `Switch`. Expected : {on: string, off: string }*/
    @Input() innerLabels   : object;
    /** Adjust size to properly display inner labels */
    @Input() size           : number;
    @Input() extraAttribute : string;
    @Input() class          : string;

    ngOnInit() {
        console.log('Switch', this);
    }
}