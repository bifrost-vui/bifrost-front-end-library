import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */
 
@Component({
    selector: 'bf-block-selection',
    templateUrl: './block-selection.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class BlockSelectionComponent implements OnInit {
    constructor() {}

    @Input() topLink                : object;
    @Input() contentLists           : object;
    @Input() totalPrice             : object;
    @Input() month                  : string;
    @Input() isCollapsableOnMobile  : boolean;
    @Input() isCollapsedByDefaultOnMobile   : boolean;

    @Input() title                  : string;
    @Input() class                  : string;
    @Input() reversed               : boolean;

    ngOnInit() {
        console.log('block selection', this);
    }   
}
