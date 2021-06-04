import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from '@angular/core';

/**
 * Description of the component InputIncrement
 *
 */
 
@Component({
  selector: 'bf-input-increment',
  templateUrl: './input-increment.component.html',
})

export class InputIncrementComponent implements OnInit {
    constructor() {}

    @Input() customClass: string ;
    @Input() isReadOnly : boolean;
    @Input() inputId    : string ;
    @Input() min        : number ;
    @Input() max        : number ;


    ngOnInit() {
        console.log('InputIncrement', this);
    }
}