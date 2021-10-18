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
    @Input() minStartValue  : number;
    @Input() maxStartValue  : number;
    @Input() labelUnit      : string;
    @Input() step           : number;
    @Input() lang           : 'en'|'fr';
    /** default has 2 handles */
    @Input() rangeHandles   :''|'min handle' |'max handle';
    @Input() rangeTitle     : string;
    @Input() rangeDesc      : string;
    @Input() minLegend      : string;
    @Input() maxLegend      : string;
    @Input() minLegendDesc  : string;
    @Input() maxLegendDesc  : string;
    @Input() class          : string;

    ngOnInit() {
        console.log('InputRange', this);
    }
}
