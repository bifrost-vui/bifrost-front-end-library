import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from '@angular/core';

/**
 * Description of the component QuantityButton
 *
 */
 
@Component({
  selector: 'bf-quantity-button',
  templateUrl: './quantity-button.component.html',
})

export class QuantityButtonComponent implements OnInit {
    constructor() {}

    @Input() min        : number ;
    @Input() max        : number ;
    @Input() inputId    : string ;
    @Input() isReadOnly : boolean;

    ngOnInit() {
        console.log('QuantityButton', this);
    }
}
