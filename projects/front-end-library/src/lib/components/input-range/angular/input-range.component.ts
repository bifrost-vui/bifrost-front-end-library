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
     /** The positionning of the `labelUnit` will change with the langauge only if  the `labelUnit` is a `$` */
    @Input() labelUnit      : string;
    @Input() step           : number;
    /** determines the positionning `labelUnit` when `labelUnit` is a `$` */
    @Input() language       : 'en'|'fr';
    @Input() isInverted     : boolean;
    @Input() class          : string;

    ngOnInit() {
        console.log('InputRange', this);
    }
}
