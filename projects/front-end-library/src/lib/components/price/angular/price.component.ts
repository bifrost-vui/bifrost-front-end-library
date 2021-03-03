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

    @Input() hasImage: boolean;
    @Input() hasTag: boolean;
    @Input() cardType               : string;
    @Input() class                  : string;
    @Input() variant                : string;

    @Input() label_value             : string = 'Label';
    @Input() label_class             : string;
    @Input() label_extraAttribute    : string;

    @Input() buttonClass            : string;

    ngOnInit() {
        console.log('Price', this);
    }
    
}
