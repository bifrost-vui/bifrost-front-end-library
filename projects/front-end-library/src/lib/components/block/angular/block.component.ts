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
    
    // Common
    @Input() title              : string;
    @Input() class              : string;

    // Block Highlight
    @Input() image               : object;
    @Input() paragraph           : string;
    @Input() button              : object;
    @Input() fullWidth           : boolean;

    // Block Selection
    @Input() topLink            : object;
    @Input() contentTop         : object;
    @Input() contentLists       : object;
    @Input() totalPrice         : object;
    @Input() month              : string;
    @Input() isListingMode      : boolean;

    ngOnInit() {
        console.log('block', this);
    }   
}
