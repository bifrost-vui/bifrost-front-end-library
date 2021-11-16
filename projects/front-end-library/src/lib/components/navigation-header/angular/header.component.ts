import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";
import { Url } from "url";
/**
 * API is the same between **Angular** and **Drupal**.
 *
 */

@Component({
    selector: 'bf-header',
    templateUrl: './header.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class HeaderComponent implements OnInit {
    constructor() {}

    @Input() reversed                : boolean;
    @Input() logoName                : string;
    @Input() logoLink                : string;
    /** Note: TopBar is only visible on desktop. */
    @Input() hasTopBar               : boolean;
    @Input() topBar_items            : any[];
    @Input() topBar_secondaryItems   : any[];
    @Input() accountHello            : string;
    /** Shows up in top bar only */
    @Input() labelConnexion           : string;

    @Input() navItems                : any[];
    /** Only the first 3 elements of the list will be displayed */
    @Input() rigthIconLinks          : any[];
    /**  Will show up on all devices if activated except if isFunnel is activated */
    @Input() hasAccountBtn           : boolean;
    @Input() isConnected             : boolean;
    @Input() hrefLogOut               : string;
    @Input() labelLogOut              : string;
    @Input() hrefConnexion            : string;
    /**  Will show up on all devices if activated */
    @Input() hasCartBtn              : boolean;
    /** Note : empty, undefined or 0 badge label value hides the cart's badge */
    /** Badge label value set to `0` will hide the badge on the cart*/
    @Input() cartBtn                 : any[];
    @Input() langcode                : string;
    @Input() search_placeholder      : string;
    @Input() hasNoSearchBtn          : boolean;
    /** Funnel has a limited contextual navigation */
    @Input() isFunnel                : boolean;
    @Input() funnelNav               : object;

    ngOnInit() {
        console.log('Header', this);
    }
}
