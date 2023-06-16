import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUpfront, IPromotion } from './api.model';

@Component({
    selector: 'bf-price',
    templateUrl: './price.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class PriceComponent implements OnInit {
    constructor() {}

    @Input() cent: string;
    @Input() class: string;
    @Input() details: HTMLElement;
    @Input() dollar: string;
    @Input() dollarClass: string;
    /**
     * - This will make width at 100% of the parent.
     * - This behavior is useful when you want `promotion.direction: horizontal`.
     */
    @Input() fullWidth: boolean;
    @Input() hasAsterisk: boolean;
    @Input() language: 'en' | 'fr';
    @Input() message: HTMLElement;
    /** Expected format:
     * <pre>
     *     <code>
     *         {
     *             "direction": `string`,
     *             "isDisplayed": `boolean`,
     *             "priceSaved": `string`,
     *             "priceStriked": `string`,
     *             "savedLabel": `string`,
     *             "superscript": `string`,
     *             "title": `string`
     *         }
     *     </code>
     * </pre>
     *
     * Promotion direction choices: `promotion.direction: "vertical" | "horizontal"`
     */
    @Input() promotion: IPromotion;
    @Input() reversed: boolean;
    @Input() size: 'small' | 'medium' | 'large';
    /** Expected format:
     * <pre>
     *     <code>
     *         {
     *             "dollar": `string`,
     *             "label": `string`
     *         }
     *     </code>
     * </pre>
     */
    @Input() upfront: IUpfront = {};
    @Input() upperTitle: string;

    /**
     * __\*Deprecated\*__
     *
     * Use `promotion.priceStriked` instead.
     */
    @Input() dashed: string;
    /**
     * __\*Deprecated\*__
     *
     * Use `promotion.priceSaved` instead.
     */
    @Input() saved: string;
    /**
     * __\*Deprecated\*__
     *
     * Use `promotion.savedLabel` instead.
     */
    @Input() savedLabel: string;

    ngOnInit() {
        console.log('Price', this);
    }
}
