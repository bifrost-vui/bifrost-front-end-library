import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {cartButton} from "../_doc/data";
/**
 * API is the same between **Angular** and **Drupal**.
 *
 */

interface ILogo {
    href: string;
    name: string;
}

@Component({
    selector: 'bf-header',
    templateUrl: './header.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class HeaderComponent implements OnInit {
    constructor() {}

    @Input() reversed                : boolean;

    /** See [Logo Component API](/?path=/docs/components-logo--drupal). E.g. `logo = { href: "#", name: "videotron" }` */
    @Input() logo                    : ILogo;

    @Input() search_placeholder      : string;

    /** Note: TopBar is only visible on desktop. */
    @Input() hasTopBar               : boolean;
    @Input() topBar_items            : any[];
    @Input() topBar_secondaryItems   : any[];

    @Input() navItems                : any[];
    /** Only the first 3 elements of the list will be displayed */
    @Input() rigthIconLinks          : any[];
    /**  Will show up on all devices if activated */
    @Input() hasAccountBtn           : boolean;
    @Input() isConnected             : boolean;

    @Input() hrefLogOut               : string;
    @Input() labelLogOut              : string;
    @Input() hrefConnexion            : string;
    /** Shows up in top bar only */
    @Input() labelConnexion           : string;
    /** Badge label value set to `0` will hide the badge on the cart*/
    @Input() cartButton               : any[];
    /** String displayed before `accountName` in the Top Bar, when connected. */
    @Input() accountHello             : string;
    /** Name of the user, displayed in the Top Bar when connected. */
    @Input() accountName              : string;

    @Input() hasNoSearchBtn          : boolean;

    ngOnInit() {
        console.log('Header', this);
    }
}
