import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-input-range',
    templateUrl: './input-range.component.html',
    // styleUrls: ['../scss/index.scss'],
})
export class InputRangeComponent implements OnInit {
    constructor() {}

    @Input() initialValue   : number | Array<number> ;
    /** inputId is required and if no `startValue` is defined, `InputValue` will be the min start*/
    @Input() min            : object;
    /** inputId is required and if no `startValue` is defined, `InputValue` will be the max start*/
    @Input() max            : object;
    @Input() labelUnit      : string;
    /** Position the unit `before`or `after` the label  */
    @Input() unitPosition   : 'before'|'after';
    @Input() step           : number;
    /** changes the direction of a 1 handle slider */
    @Input() isInverted     : boolean;
    @Input() class          : string;

    ngOnInit() {
        console.log('InputRange', this);
    }
}
