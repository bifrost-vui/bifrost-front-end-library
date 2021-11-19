import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

interface IUpfront {
  label         : string;
  dollar        : number;
}

interface IPromotion {
  title           : string,
  priceStriked    : number;
  priceSaved      : number;
  savedLabel      : string;
  superscript     : string;
  direction       : string;
}

export interface IPrice {
    upperTitle  : string;
    upfront     : IUpfront;
    dollar      : number;
    dollarClass : string;
    cent        : number;
    hasAsterisk : boolean;
    promotion   : IPromotion;
    details     : string;
    message     : string;
    size        : 'small' | 'medium' | 'large';
    fullWidth   : boolean;
    class       : string;
    reversed    : boolean;
    language    : 'en' | 'fr';
}

// 'vertical' | 'horizontal';

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */

@Component({
    selector: 'bf-price',
    templateUrl: './price.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class PriceComponent implements OnInit {
    constructor() {}

    @Input() upperTitle             : string;

    @Input() upfront                : IUpfront;

    @Input() dollar                 : number;
    @Input() dollarClass            : string;
    @Input() cent                   : number;
    @Input() hasAsterisk            : boolean;

    /** promotion.direction = "vertical" | "horizontal" */
    @Input() promotion              : IPromotion;

    /** **Deprecated** Use `promotion.priceStriked` instead. */
    @Input() dashed                 : string;
    /** **Deprecated** Use `promotion.priceSaved` instead. */
    @Input() saved                  : string;
    /** **Deprecated** Use `promotion.savedLabel` instead. */
    @Input() savedLabel             : string;
    @Input() details                : string;
    @Input() message                : string;

    @Input() size                   : 'small' | 'medium' | 'large';
    /** This will make width at 100% of the parent. This behavior is useful when you want `promotion.direction: horizontal`.  */
    @Input() fullWidth              : boolean;
    @Input() class                  : string;
    @Input() reversed               : boolean;

    @Input() language               : 'en' | 'fr';

    ngOnInit() {
        console.log('Price', this);
    }
}
