import { Component, OnInit, Input } from '@angular/core';

/**
 * Description of the component %ComponentName%
 *
 */

@Component({
    selector: 'bf-%component-name%',
    templateUrl: './%component-name%.component.html',
})
export class %ComponentName%Component implements OnInit {
    constructor() {}

    /**
    * The inner text.
    *
    * @required
    */
    @Input() label              : string;

    @Input() reversed           : boolean;
    /** Class override */
    @Input() class              : string;

    ngOnInit() {
        console.log('%ComponentName%', this);
    }
}
