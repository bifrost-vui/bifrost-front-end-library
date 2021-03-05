import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */
 
@Component({
    selector: 'bf-block',
    templateUrl: './block.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class BlockComponent implements OnInit {
    constructor() {}
    
    @Input() title              : string;
    @Input() contentLists       : object;

    @Input() totalPrice         : string;
    @Input() savingLabel        : string;
    @Input() subtitleTotal      : string;
    @Input() totalPriceDetails  : string;
    @Input() month              : string;

    @Input() class              : string;

    ngOnInit() {
        console.log('block', this);
    }   
}
