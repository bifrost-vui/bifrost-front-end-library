import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

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

    @Input() dollar                 : string;
    @Input() dollarClass            : string;
    @Input() cent                   : string;
    @Input() isMonthlyPayment       : boolean;
    @Input() recurrencePeriod       : string;
    @Input() hasAsterisk            : boolean;
    
    @Input() priceSavings           : string;
    @Input() priceDashed            : string;
    @Input() priceSaved             : string;
    @Input() priceSavedLabel        : string;
    
    @Input() infosSupp              : string;
    @Input() infosSuppColor         : string;
    @Input() txtBelow               : string;
    @Input() txtBelowClass          : string;

    @Input() class                  : string;
    @Input() boxSize                : string;

    @Input() language               : string;

    ngOnInit() {
        console.log('Price', this);
    }
}
