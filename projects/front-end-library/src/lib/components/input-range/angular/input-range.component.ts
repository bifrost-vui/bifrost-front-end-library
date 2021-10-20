import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bf-input-range',
  templateUrl: './input-range.component.html',
  // styleUrls: ['../scss/index.scss'],
})
export class InputRangeComponent implements OnInit {
    constructor() {}
    @Input() minInputId     : string;
    @Input() maxInputId     : string;
    @Input() minInputValue  : number;
    @Input() maxInputValue  : number;
    /** if no `minStartValue` is defined, `minInputValue` will be used instead  */
    @Input() minStartValue  : number;
    /** if no `maxStartValue` is defined, `maxInputValue` will be used instead  */
    @Input() maxStartValue  : number;
    @Input() labelUnit      : string;
    @Input() step           : number;
    @Input() lang           : 'en'|'fr';
    /** By default this component displays 2 handles. By selecting `min handle` or `max handle` the component will display only one */
    @Input() rangeHandles   :''|'min handle' |'max handle';
    @Input() minLegend      : string;
    @Input() maxLegend      : string;
    @Input() minLegendDesc  : string;
    @Input() maxLegendDesc  : string;
    @Input() class          : string;

    ngOnInit() {
        console.log('InputRange', this);
    }
}
