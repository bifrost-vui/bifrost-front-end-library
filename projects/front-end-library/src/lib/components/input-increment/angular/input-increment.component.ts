import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'bf-input-increment',
    templateUrl: './input-increment.component.html',
})
export class InputIncrementComponent implements OnInit {
    constructor() {}

    @Input() inputId: string;
    @Input() value: number;
    @Input() min: number;
    @Input() max: number;
    @Input() ariaLabel: string;
    @Input() isReadOnly: boolean;
    @Input() isDisabled: boolean;
    @Input() isRequired: boolean;
    @Input() errorMessage: string;
    @Input() class: string;

    ngOnInit() {
        console.log('InputIncrement', this);
    }
}
