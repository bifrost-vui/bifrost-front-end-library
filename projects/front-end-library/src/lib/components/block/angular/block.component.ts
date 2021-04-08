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
    @Input() reversed           : boolean;

    // Block Highlight
    @Input() image              : object;
    @Input() paragraph          : string;
    @Input() button             : object;
    @Input() fullWidth          : boolean;

    // Block Selection
    @Input() topLink            : object;
    @Input() contentLists       : object;
    @Input() totalPrice         : object;
    @Input() month              : string;
    @Input() isExpandable       : boolean;

    ngOnInit() {
        console.log('block', this);
    }   
}
