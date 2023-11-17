import { Component, OnInit, Input } from '@angular/core';
import { IFilter } from '../../../components/filter/angular/api.model';

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
     * Custom classes on component main element.
     */
    @Input() class: string;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * - Array of Filter component objects.
     * - See Filter component [API](/?path=/docs/components-filter--drupal-twig-block#component-api).
     *
     * @required
     */
    @Input() dataFilters: IFilter[];
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Component main element's `id` attribute.
     */
    @Input() id: string;

    ngOnInit() {
        console.log('Filters', this);
    }
}
