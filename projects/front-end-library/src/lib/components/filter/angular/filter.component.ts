import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-filter',
    templateUrl: './filter.component.html',
})
export class FilterComponent implements OnInit {
    constructor() {}

    /* In alphabetical order (remove this comment) */

    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on Filter main element.
     */
    @Input() class: string;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * - Filter main element's `id` attribute.
     * - Needed to differentiate with other filter accordion items.
     *
     * @required
     */
    @Input() id: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Filter's accordions group container element `id` attribute.
     * - See [Group of accordions](/?path=/docs/components-accordion--drupal#group-of-accordions) at the top of the page.
     */
    @Input() idParent: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Is the Filter item disabled?
     */
    @Input() isDisabled: boolean = false;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Is the Filter accordion expanded by default?
     */
    @Input() isExpandedByDefault: boolean = false;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * String containing the total number of selections selected in this filter.
     */
    @Input() numberOfSelections: string;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * Title of the filter.
     *
     * @required
     */
    @Input() title: string;

    ngOnInit() {
        console.log('Filter', this);
    }
}
