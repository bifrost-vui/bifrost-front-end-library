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

    @Input() uppertitle             : string;

    @Input() dollar                 : string;
    @Input() dollarClass            : string;
    @Input() cent                   : string;
    @Input() hasAsterisk            : boolean;
    @Input() dashed                 : string;
    @Input() saved                  : string;
    @Input() savedLabel             : string;
    @Input() details                : string;
    @Input() message                : string;

    @Input() class                  : string;
    @Input() size                   : string;

    @Input() language               : string;

    ngOnInit() {
        console.log('Price', this);
    }
}
