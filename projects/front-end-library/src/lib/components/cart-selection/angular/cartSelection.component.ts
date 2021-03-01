import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */
 
@Component({
    selector: 'bf-card',
    templateUrl: './cartSelection.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class CartSelectionComponent implements OnInit {
    constructor() {}

    @Input() cart           : string;
    @Input() item           : string;
    @Input() amount         : string;    
    @Input() total          : string;    
    @Input() class          : string;

    ngOnInit() {
        console.log('card', this);
    }
    
}
