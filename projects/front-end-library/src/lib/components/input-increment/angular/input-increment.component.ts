import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from '@angular/core';

/**
 * Description of the component InputIncrement
 *
 */
 
@Component({
  selector: 'bf-inputIncrement',
  templateUrl: './input-increment.component.html',
})

export class InputIncrementComponent implements OnInit {
    constructor() {}

    @Input() class      : string ;
    @Input() ariaLabel  : string ;
    @Input() inputId    : string ;
    @Input() inputValue : number ;
    @Input() min        : number ;
    @Input() max        : number ;
    @Input() errorMessage : string;
    @Input() isReadOnly : boolean;
    @Input() isDisabled : boolean;

    ngOnInit() {
        console.log('InputIncrement', this);
    }
}