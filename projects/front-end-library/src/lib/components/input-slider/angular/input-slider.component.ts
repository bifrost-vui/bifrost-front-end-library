import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-input-slider',
    templateUrl: './input-slider.component.html',
    // styleUrls: ['../scss/index.scss'],
})
export class InputSliderComponent implements OnInit {
    constructor() {}

    @Input() value          : number | number[];
    /** `min { **inputId**, **value**, legend, description }`: **inputId** and **value** are required. */
    @Input() min            : object;
    /** `max { **inputId**, **value**, legend, description }`:  **inputId** and **value** are required. */
    @Input() max            : object;
    @Input() step           : number;
    /** Change the position of the progression track. Has no effect on a slider with 2 handles. */
    @Input() isInverted     : boolean;

    @Input() unitLabel      : string;
    @Input() unitPosition   : 'start'|'end';
    /** Set `isUnitPrice` will handle `unitPosition` depending of `language`. */
    @Input() isUnitDollar   : boolean;

    @Input() class          : string;
    @Input() reversed       : boolean;
    @Input() language       : 'en' | 'fr';

    ngOnInit() {
        console.log('InputSlider', this);
    }
}
