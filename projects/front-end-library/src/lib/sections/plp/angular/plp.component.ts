import { Component, OnInit, Input } from '@angular/core';
import { IFilter } from '../../../components/filter/angular/api.model';

@Component({
    selector: 'bf-plp',
    templateUrl: './plp.component.html',
})
export class PlpComponent implements OnInit {
    constructor() {}

    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on PLP main element.
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
     * PLP main element's `id` attribute.
     */
    @Input() id: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * In Chips Group, if there is no filters selected, this message will be displayed.
     */
    @Input() noFilterMessage: string = 'Filter our phones to find yours.';
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * Number of products results.
     *
     * @required
     */
    @Input() numberOfResults: number = 0;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Size of the number of products results.
     */
    @Input() numberOfResultsSize: 'normal' | 'h2' | 'h3' = 'h3';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * HTML tag of the number of products results.
     */
    @Input() numberOfResultsTag: 'p' | 'h2' | 'h3' = 'h2';

    ngOnInit() {
        console.log('Plp', this);
    }
}
