import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-filters',
    templateUrl: './filters.component.html',
})
export class FiltersComponent implements OnInit {
    constructor() {}

    /* In alphabetical order (remove this comment) */

    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on Filters main element.
     */
    @Input() class: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Filters main element's `id` attribute.
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
        console.log('Filters', this);
    }
}
