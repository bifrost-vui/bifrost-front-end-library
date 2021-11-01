import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-input-slider',
    templateUrl: './input-slider.component.html',
    // styleUrls: ['../scss/index.scss'],
})
export class InputSliderComponent implements OnInit {
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
        console.log('InputSlider', this);
    }
}
