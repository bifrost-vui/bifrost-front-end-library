import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'bf-input-increment',
    templateUrl: './input-increment.component.html',
})
export class InputIncrementComponent implements OnInit {
    constructor() {}

    @Input() inputId: string;
    @Input() value: number;
    /** Number must be lower than `max` value */
    @Input() min?: number;
    /** Number must be higher than `min` value */
    @Input() max?: number;
    @Input() ariaLabel: string;
    @Input() isReadOnly: boolean;
    @Input() isDisabled: boolean;
    /** Set the input as required in the form */
    @Input() isRequired: boolean;
    /** Should always be defined if a `min` or a `max` value is defined */
    @Input() errorMessage: string;
    @Input() class: string;

    ngOnInit() {
        console.log('InputIncrement', this);
    }
}
