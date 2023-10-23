import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-%component-name%',
    templateUrl: './%component-name%.component.html',
})
export class %ComponentName%Component implements OnInit {
    constructor() {}

    /* In alphabetical order (remove this comment) */

    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on %ComponentName% main element.
     */
    @Input() class: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * %ComponentName% main element's `id` attribute.
     */
    @Input() id: string;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * The inner text.
     *
     * @required
     */
    @Input() label: string;

    ngOnInit() {
        console.log('%ComponentName%', this);
    }
}
