import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

/**
 * Description of the component Stepper
 *
 */

@Component({
  selector: 'bf-stepper',
  templateUrl: './stepper.component.html',
  // styleUrls: ['../scss/index.scss'],
})
export class StepperComponent implements OnInit {
    constructor() {}

    /** Expected :
     *  [ { label:"stepName", href:"/path-to-file" }, {...} ]
     */
    @Input() steps            : array<object>;
    @Input() currentStep      : number;
    @Input() class            : string;
    /** Display a counter's label if `hasCounter` is true. */
    @Input() counterLabel     : string;
    /** Will display a counter under the current step label. */
    @Input() hasCounter       : boolean;
    @Input() isNextClickable  : boolean;
    @Input() reversed         : boolean;


    ngOnInit() {
        console.log('Stepper', this);
    }
}
