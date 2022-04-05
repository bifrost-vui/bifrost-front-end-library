import { Component, OnInit, Input } from '@angular/core';

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
    @Input() label: string;

    /** Class override */
    @Input() class: string;

    ngOnInit() {
        console.log('%ComponentName%', this);
    }
}
