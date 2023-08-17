import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-sticky-bar',
    templateUrl: './sticky-bar.component.html',
})
export class StickyBarComponent implements OnInit {
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
        console.log('StickyBar', this);
    }
}
