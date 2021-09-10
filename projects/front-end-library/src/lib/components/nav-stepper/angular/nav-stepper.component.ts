import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

/**
 * Description of the component NavStepper
 *
 */

@Component({
  selector: 'bf-nav-stepper',
  templateUrl: './nav-stepper.component.html',
  // styleUrls: ['../scss/index.scss'],
})
export class NavStepperComponent implements OnInit {
    constructor() {}

    /**
    * The inner text.
    *
    * @required
    */
    @Input() navItemSteps : object;
    @Input() activeStep   : number;
    @Input() class        : string;
    @Input() reversed     : boolean;

    ngOnInit() {
        console.log('NavStepper', this);
    }
}
