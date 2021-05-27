import { Component, OnInit, Input } from '@angular/core';

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

    /** Class override */
    @Input() min  : number ;
    @Input() max  : number ;


    ngOnInit() {
        console.log('QuantityButton', this);
    }
}
