import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";
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
    @Input() logo_name               : string;
    @Input() search_placeholder      : string;

    /** Note: TopBar is only visible on desktop. */
    @Input() hasTopBar               : boolean;
    @Input() topBar_items            : any[];
    @Input() topBar_secondaryItems   : any[];

    @Input() navItems                : any[];
    /** Maximum 5 first element of the list will be display  */
    @Input() rigthIconLinks          : any[];
    /**  Will show up on all devices if activated */
    @Input() hasAccountBtn           : boolean;
    @Input() isConnected             : boolean;

    @Input() hrefLogOut               : string;
    @Input() labelLogOut              : string;
    @Input() hrefConnexion            : string;
    /** Shows up in top bar only */
    @Input() labelConnexion           : string;
    
    /**  Will show up on all devices if activated */
    @Input() hasCartBtn              : boolean;
    /** Note : empty, undefined or 0 badge label value hides the cart's badge */
    @Input() cartBtn                 : any[];    

    @Input() hasNoSearchBtn          : boolean;

    ngOnInit() {
        console.log('Header', this);
    }
}
