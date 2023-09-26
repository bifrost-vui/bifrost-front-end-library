import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-good-to-know',
    templateUrl: './good-to-know.component.html',
})
export class GoodToKnowComponent implements OnInit {
    constructor() {}

    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Background color of the component.
     */
    @Input() background: 'ground' | 'underground' | 'highlight' | 'dark' = 'underground';

    /** Class override */
    @Input() class: string;

    /**
     * It displays after `title`.
     */
    @Input() description_html: HTMLElement;

    @Input() icon: string;

    /** Class override */
    @Input() id: string;

    /**
     * It displays before `description`.
     */
    @Input() title: string = 'Bon à savoir';

    ngOnInit() {
        console.log('GoodToKnow', this);
    }
}
