import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUpfront, IPromotion } from './api.model';

@Component({
    selector: 'bf-price',
    templateUrl: './price.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class PriceComponent implements OnInit {
    constructor() {}

    @Input() upperTitle: string;

    @Input() upfront: IUpfront;

    @Input() dollar: number;
    @Input() dollarClass: string;
    @Input() cent: number;
    @Input() hasAsterisk: boolean;

    /** promotion.direction = `"vertical"` or `"horizontal"` */
    @Input() promotion: IPromotion;

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
    @Input() details: HTMLElement;
    @Input() message: HTMLElement;

    @Input() size: 'small' | 'medium' | 'large';
    /**
     * - This will make width at 100% of the parent.
     * - This behavior is useful when you want `promotion.direction: horizontal`.
     */
    @Input() fullWidth: boolean;
    @Input() class: string;
    @Input() reversed: boolean;

    @Input() language: 'en' | 'fr';

    ngOnInit() {
        console.log('Price', this);
    }
}
