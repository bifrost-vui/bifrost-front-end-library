import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */
 
@Component({
    selector: 'bf-block-highlight',
    templateUrl: './block-highlight.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class BlockHighlightComponent implements OnInit {
    constructor() {}

    @Input() image              : object;
    @Input() paragraph          : string;
    @Input() button             : object;
    @Input() fullWidth          : boolean;

    @Input() title              : string;
    @Input() class              : string;
    @Input() reversed           : boolean;

    ngOnInit() {
        console.log('block highlight', this);
    }   
}
