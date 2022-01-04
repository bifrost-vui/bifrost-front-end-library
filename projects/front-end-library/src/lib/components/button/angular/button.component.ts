import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */

@Component({
    selector: "bf-button",
    templateUrl: './button.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class ButtonComponent implements OnInit {
    constructor() {}

    @Input() id             : string;
    @Input() label          : string;
    /**
        A button will become a link if `href` is defined.
    */
    @Input() href           : string;
    @Input() hierarchy      : string;
    @Input() isDisabled     : boolean;
    @Input() hasLoading     : boolean;
    @Input() isLoading      : boolean;
    @Input() fullWidth      : boolean;

    @Input() iconName       : string;
    /** This is not recommended to change the size of the icon. */
    @Input() iconSize       : string;
    @Input() iconPosition   : string;

    @Input() dataDismiss    : string;
    @Input() dataToggle     : string;
    @Input() dataTarget     : string;
    @Input() ariaControls   : string;
    @Input() ariaExpanded   : string;
    @Input() ariaLabel      : string;
    @Input() extraAttribute : string;
    @Input() class          : string;


    ngOnInit() {
        console.log('button', this);
    }

}
