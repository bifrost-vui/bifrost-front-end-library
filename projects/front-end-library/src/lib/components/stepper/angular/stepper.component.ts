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
     *  [{label:"stepName",href:"/path-to-file"}, {...}]
     */
    @Input() navItemSteps     : object;
    @Input() activeStep       : number;
    @Input() class            : string;
    /** hasStepCounter must be set to true in order for the label to display*/
    @Input() counterLabel     : string;
    /** will display `activeStep`/`total step count` */
    @Input() hasStepCounter   : boolean;
    @Input() nextIsClickable  : boolean;
    @Input() reversed         : boolean;


    ngOnInit() {
        console.log('Stepper', this);
    }
}
