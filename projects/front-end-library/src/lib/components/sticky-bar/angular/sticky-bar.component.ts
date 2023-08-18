import { Component, OnInit, Input } from '@angular/core';
import { IButton } from '../../button/angular/api.model';
import { IPrice } from '../../price/angular/api.model';

@Component({
    selector: 'bf-sticky-bar',
    templateUrl: './sticky-bar.component.html',
})
export class StickyBarComponent implements OnInit {
    constructor() {}

    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * - Button component that displays on the far right of the component.
     * - See Button Component [API](/?path=/docs/components-button--drupal#component-api).
     *
     * @required
     */
    @Input() button: IButton;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on the sticky bar main element.
     */
    @Input() class: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * It reverses the background and the text color if the prop is set as `true`.
     */
    @Input() isReversed: boolean = true;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * - Price component that displays on the right of the component, before the `button`.
     * - See Price Component [API](/?path=/docs/components-price--drupal#component-api).
     *
     * @required
     */
    @Input() price: IPrice;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Title that displays on the far left of the component.
     * - Only visible on tablet and desktop resolutions.
     */
    @Input() title: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - The value of this prop will add a CSS `z-index` style on the main component.
     * - There is a default value based on the component created with "Google Optimize",
         but if this value is lower or higher than other critical elements, it is necessary
         to adjust it so it superposes most elements but not warning messages or chat widgets.
     */
    @Input() zIndex: string = '1030';

    ngOnInit() {
        console.log('StickyBar', this);
    }
}
