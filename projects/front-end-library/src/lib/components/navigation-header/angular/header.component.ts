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
    @Input() rigthIconLinks          : any[];
    @Input() hasAccountBtn           : boolean;
    @Input() isConnected             : boolean;

    @Input() hrefLogOut               : string;
    @Input() labelLogOut              : string;
    @Input() hrefConnexion            : string;
    @Input() labelConnexion           : string;

    // @Input() hasMiniCartBtn          : boolean;
    @Input() hasNoSearchBtn          : boolean;

    ngOnInit() {
        console.log('Header', this);
    }
    
}
