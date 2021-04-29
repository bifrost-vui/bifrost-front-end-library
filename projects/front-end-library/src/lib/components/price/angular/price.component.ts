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

    @Input() upperTitle             : string;
    @Input() dollar                 : string;
    @Input() dollarClass            : string;
    @Input() cent                   : string;
    @Input() hasAsterisk            : boolean;
    @Input() dashed                 : string;
    @Input() saved                  : string;
    @Input() savedLabel             : string;
    @Input() details                : string;
    @Input() message                : string;
    @Input() size                   : 'small' | 'medium' | 'large';
    @Input() direction              : 'vertical' | 'horizontal';
    /** This will make width at 100% of the parent. This behavior is useful when you want direction: horizontal.  */
    @Input() fullWidth              : boolean;
    @Input() class                  : string;
    @Input() reversed               : boolean;

    @Input() language               : 'en' | 'fr';

    ngOnInit() {
        console.log('Price', this);
    }
}
