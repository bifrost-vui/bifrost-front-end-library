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

    @Input() min        : number ;
    @Input() max        : number ;
    @Input() inputId    : string ;
    @Input() customClass: string ;
    @Input() isReadOnly : boolean;

    ngOnInit() {
        console.log('InputIncrement', this);
    }
}