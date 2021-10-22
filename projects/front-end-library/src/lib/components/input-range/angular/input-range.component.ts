import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-input-range',
    templateUrl: './input-range.component.html',
    // styleUrls: ['../scss/index.scss'],
})
export class InputRangeComponent implements OnInit {
    constructor() {}
    /** inputId is required and if no `startValue` is defined, `InputValue` will be the min start value */
    @Input() min            : object;
    /** inputId is required and if no `startValue` is defined, `InputValue` will be the max start value */
    @Input() max            : object;
     /** The positionning of the `labelUnit` is  */
     @Input() labelUnit      : string;
    @Input() step           : number;
    /** determines the positionning `labelUnit` when `labelUnit` is a $ */
    @Input() language       : 'en'|'fr';
    /** By default this component displays 2 handles. By selecting `min` or `max` the component will display only one */
    @Input() rangeHandles   : ''|'min' |'max';
    @Input() class          : string;

    ngOnInit() {
        console.log('InputRange', this);
    }
}
