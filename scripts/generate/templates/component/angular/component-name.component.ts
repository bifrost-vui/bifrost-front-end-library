import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

/**
 * Description of the component %ComponentName%
 *
 */
 
@Component({
  selector: 'bf-%component-name%',
  templateUrl: './%component-name%.component.html',
  // styleUrls: ['../scss/index.scss'],
})
export class %ComponentName%Component implements OnInit {
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
        console.log('%ComponentName%', this);
    }
}
