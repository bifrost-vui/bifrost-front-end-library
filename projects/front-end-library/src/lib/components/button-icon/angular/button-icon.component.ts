import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */
@Component({
    selector: "bf-button-icon",
    templateUrl: './button-icon.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class ButtonIconComponent implements OnInit {
    constructor() {}

    @Input() icon           : string;
    /**  Display a data-title  */
    @Input() label          : string;
    /**  A button will become a link if `href` is defined. */
    @Input() href           : string;
    @Input() isDisabled     : boolean;
    @Input() dataDismiss    : string;
    @Input() dataToggle     : string;
    @Input() dataTarget     : string;
    @Input() ariaControls   : string;
    @Input() ariaExpanded   : string;
    @Input() ariaLabel      : string;
    @Input() extraAttribute : string;
    @Input() class          : string;
    @Input() badgeLabel     : string;

    ngOnInit() {
        console.log('button-icon', this);
    }
}
