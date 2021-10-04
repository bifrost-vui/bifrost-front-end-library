import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */

@Component({
    selector: 'bf-row-button',
    templateUrl: './row-button.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class RowButtonComponent implements OnInit {
    constructor() {}

    @Input() href               : string;
    @Input() title              : string;
    @Input() titleTag           : string;
    @Input() paragraph          : string;
    @Input() image              : object;
    @Input() iconName           : string;
    @Input() hasChevron         : boolean;

    @Input() dataDismiss        : string;
    @Input() dataToggle         : string;
    @Input() dataTarget         : string;
    @Input() ariaControls       : string;
    @Input() ariaLabel          : string;
    @Input() extraAttribute     : string;

    @Input() class              : string;
    @Input() reversed           : boolean;

    ngOnInit() {
        console.log('row-button', this);
    }

}
