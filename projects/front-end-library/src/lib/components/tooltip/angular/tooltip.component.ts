import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-tooltip',
    templateUrl: './tooltip.component.html',
})
export class TooltipComponent implements OnInit {
    constructor() {}

    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Name of the icon in the button.
     * - See [Icons - Interface List](/?path=/story/components-icon--drupal-interface)
         or [Icons - Illustration List](/?path=/story/components-icon--drupal-illustration) for icon names.
     */
    @Input() buttonIcon: string = 'question-circle-outline';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on Tooltip main element.
     */
    @Input() class: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Tooltip main element's `id` attribute.
     */
    @Input() id: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * If the value is `true`, then the color scheme of the tooltip will be the `reversed` one.
     */
    @Input() isReversed: boolean = false;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * The position of the tooltip relative to the button.
     */
    @Input() placement: 'auto' | 'top' | 'bottom' | 'right' | 'left' = 'auto';
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * The tooltip text.
     *
     * @required
     */
    @Input() text: string;

    ngOnInit() {
        console.log('Tooltip', this);
    }
}
