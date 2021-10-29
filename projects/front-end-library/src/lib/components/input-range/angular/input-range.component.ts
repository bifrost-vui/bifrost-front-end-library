import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-input-range',
    templateUrl: './input-range.component.html',
    // styleUrls: ['../scss/index.scss'],
})
export class InputRangeComponent implements OnInit {
    constructor() {}
    @Input() initialValue   : number | Array<number> ;
    /** min {**InputId**, **value**, legend, description} **InputId** and **value** are required  */
    @Input() min            : object;
    /** max {**InputId**, **value**, legend, description} **InputId** and **value** are required */
    @Input() max            : object;
    @Input() labelUnit      : string;
    @Input() unitPosition   : 'start'|'end';
    @Input() step           : number;
    /** changes the direction of a 1 handle slider */
    @Input() isInverted     : boolean;
    @Input() class          : string;

    ngOnInit() {
        console.log('InputRange', this);
    }
}
