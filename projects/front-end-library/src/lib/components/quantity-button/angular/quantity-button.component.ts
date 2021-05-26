import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

/**
 * Description of the component QuantityButton
 *
 */
 
@Component({
  selector: 'bf-quantity-button',
  templateUrl: './quantity-button.component.html',
  // styleUrls: ['../scss/index.scss'],
})
export class QuantityButtonComponent implements OnInit {
    constructor() {}

    /**
    * The inner text.
    *
    * @required
    */
    @Input() label: string;

    /** Class override */
    @Input() class: string;

    ngOnInit() {
        console.log('QuantityButton', this);
    }
}
