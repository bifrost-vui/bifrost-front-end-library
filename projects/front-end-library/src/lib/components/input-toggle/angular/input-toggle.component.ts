import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';


@Component({
  selector: 'bf-input-toggle',
  templateUrl: './input-toggle.component.html',
  // styleUrls: ['../scss/index.scss'],
})
export class InputToggleComponent implements OnInit {
    constructor() {}


    @Input() id             : string;
    @Input() name           : string;
    @Input() ariaLabel      : string;
    @Input() isDisabled     : boolean;
    @Input() isChecked      : boolean;
    @Input() isInvalid      : boolean;
    /** Display labels inside the input toggle. Expected : {on: string, off: string }*/
    @Input() innerLabels   : object;
    /** Adjust size to properly display inner labels */
    @Input() size           : number;
    @Input() extraAttribute : string;
    @Input() class          : string;

    ngOnInit() {
        console.log('InputToggle', this);
    }
}