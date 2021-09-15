import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

/**
 * Description of the component NavStepper
 *
 */

@Component({
  selector: 'bf-stepper',
  templateUrl: './nav-stepper.component.html',
  // styleUrls: ['../scss/index.scss'],
})
export class NavStepperComponent implements OnInit {
    constructor() {}

    /** Expected :
     *  [{label:"stepName",href:"/path-to-file"}, {...}]
     */
    @Input() navItemSteps     : object;
    @Input() activeStep       : number;
    @Input() class            : string;
    /** hasStepCounter must be set to true in order for the label to display*/
    @Input() counterLabel     : string;
    @Input() previousHasLabel : boolean;
    @Input() nextHasLabel     : boolean;
    @Input() nextIsClickable  : boolean;
    @Input() hasStepCounter   : boolean;
    @Input() reversed         : boolean;

    ngOnInit() {
        console.log('NavStepper', this);
    }
}
