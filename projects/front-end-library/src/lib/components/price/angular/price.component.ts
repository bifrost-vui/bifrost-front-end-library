import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUpfront, IPromotion, IPrice, ISize } from './api.model';

@Component({
    selector: 'bf-price',
    templateUrl: './price.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class PriceComponent implements IPrice, OnInit {
    constructor() {}

    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * It displays the `cent` value in the main price, just after `dollar`.
     */
    @Input() cent: string = '00';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on the price main element.
     */
    @Input() class: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * It displays a text string in the main price, just after `dollar` and below `cent`.
     */
    @Input() details: HTMLElement;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * It displays the `dollar` value in the main price, just before `cent`.
     */
    @Input() dollar: string = '0';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on `dollar` element.
     */
    @Input() dollarClass: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - If the value is `true`, this will make the component width at 100%.
     * - This behavior is useful when you want `promotion.direction: "horizontal"`.
     */
    @Input() fullWidth: boolean = false;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * It displays an asterisk as a superscript after `cent`.
     */
    @Input() hasAsterisk: boolean = false;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * If the value is `false`, the main price and the promotion block
       will not be displayed even if `dollar` and `cent` has a value set.
     */
    @Input() isPriceBoxDisplayed: boolean = true;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * This prop will dictate how to format the prices displayed in the component.
       The dollar sign is before the price in English and after in French.
       Also, the separator between dollars and cents is different in English than in French.
     */
    @Input() language: 'en' | 'fr' = 'en';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * It displays a text below the promotion block. When `promotion.direction: "horizontal"`
       it is also below the main price.
     */
    @Input() message: HTMLElement;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It displays a promotion block after or below the main price,
         depending `promotion.direction` value.
     * - See `IPromotion`
     *    <a href="/?path=/docs/components-price-api--page#ipromotion-api" target="_blank">API</a>
     *    and <a href="/?path=/docs/components-price-api--page#ipromotion-format" target="_blank">expected format</a>.
     */
    @Input() promotion: IPromotion;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It changes the size of the text of the main price.
     * - There is three differents sizes: `small` | `medium` | `large`.
     * - If there is only one size across all screen resolutions,
         you can pass a simple string of one of these three sizes.
     * - If the size has to be different in one or more screen resolution,
     *   use the breakpoint object. For that, see `ISize`
     *    <a href="/?path=/docs/components-price-api--page#isize-api" target="_blank">API</a>
     *    and <a href="/?path=/docs/components-price-api--page#isize-format" target="_blank">expected format</a>.
     */
    @Input() size: 'small' | 'medium' | 'large' | ISize = 'small';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It displays a price and a text string above the main price.
     * - See `IUpfront`
     *    <a href="/?path=/docs/components-price-api--page#iupfront-api" target="_blank">API</a>
     *    and <a href="/?path=/docs/components-price-api--page#iupfront-format" target="_blank">expected format</a>.
     */
    @Input() upfront: IUpfront;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * It displays a text string above `upfront`.
     */
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
