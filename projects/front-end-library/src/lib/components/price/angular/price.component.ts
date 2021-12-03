import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";
import { IUpfront, IPromotion } from './api.model';
 
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
