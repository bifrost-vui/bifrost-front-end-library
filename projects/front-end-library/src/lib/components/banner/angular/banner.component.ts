import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";
import { ILink } from "../../link/angular/api.model";

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */

@Component({
    selector: 'bf-banner',
    templateUrl: './banner.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class BannerComponent implements OnInit {
    constructor() {}

    @Input() title              : string;
    @Input() paragraph          : string;
    @Input() image              : object;
    @Input() iconName           : string;
    @Input() link               : ILink;
    /**
        You can pass directly the **label** in string format or an object based on [Badge](/?path=/docs/components-badge--drupal) component API.
    */
    @Input() badge              : any;
    @Input() class              : string;
    @Input() reversed           : boolean;
    @Input() isClickable        : boolean;
    /** deprecated. use `link` instead */
    @Input() linkLabel          : string;
    /** deprecated. use `link` instead */
    @Input() href               : string;

    ngOnInit() {
        console.log('banner', this);
    }

}