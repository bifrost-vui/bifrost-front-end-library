import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-input-slider',
    templateUrl: './input-slider.component.html',
    // styleUrls: ['../scss/index.scss'],
})
export class InputSliderComponent implements OnInit {
    constructor() {}

    @Input() value          : number | number[];
    /** `min { **InputId**, **value**, legend, description }`: **InputId** and **value** are required. */
    @Input() min            : object;
    /** `max { **InputId**, **value**, legend, description }`:  **InputId** and **value** are required. */
    @Input() max            : object;
    @Input() unitLabel      : string;
    @Input() unitPosition   : 'start'|'end';
    @Input() step           : number;
    /** Change the position of the progression track. Has no effect on a slider with 2 handles. */
    @Input() isInverted     : boolean;
    @Input() class          : string;
    @Input() reversed       : boolean;

    ngOnInit() {
        console.log('InputSlider', this);
    }
}
