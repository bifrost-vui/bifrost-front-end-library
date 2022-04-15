import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';


@Component({
  selector: 'bf-input-switch',
  templateUrl: './input-switch.component.html',
  // styleUrls: ['../scss/index.scss'],
})
export class InputSwitchComponent implements OnInit {
    constructor() {}


    @Input() id: string;
    @Input() name: string;

    /** the label can either be a string or an object: { text, class, position (left|right) }. The label default position is left */
    @Input() label: string|object;
    @Input() ariaLabel: string;

    @Input() isDisabled: boolean;
    @Input() isChecked: boolean;
    @Input() extraAttribute: string;

    @Input() class: string;

    ngOnInit() {
        console.log('InputSwitch', this);
    }
}