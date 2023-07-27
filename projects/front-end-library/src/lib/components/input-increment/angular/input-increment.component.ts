import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IInputIncrement } from './api.model';

@Component({
    selector: 'bf-input-increment',
    templateUrl: './input-increment.component.html',
})
export class InputIncrementComponent implements IInputIncrement, OnInit {
    constructor() {}

    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Descriptive text for accessibility purpose.
     */
    @Input() ariaLabel: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes put on the component container.
     */
    @Input() class: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Should always be defined if a `min` or a `max` value is defined.
     */
    @Input() errorMessage: string;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * Id attribute on the `input`.
     *
     * @required
     */
    @Input() inputId: string;
    /** <span style="color: orange;">__Optional__</span> */
    @Input() isDisabled: boolean = false;
    /** <span style="color: orange;">__Optional__</span> */
    @Input() isReadOnly: boolean = false;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Set the `input` as required in the form.
     */
    @Input() isRequired: boolean = true;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Number must be lower than `max` value.
     */
    @Input() min: /* number |  */ string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Number must be higher than `min` value.
     */
    @Input() max: /* number |  */ string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Value of the `input`.
     */
    @Input() value: number = 0;

    ngOnInit() {
        console.log('InputIncrement', this);
    }
}
