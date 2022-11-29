import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

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
    @Input() navItems                : any[];
    /** Maximum 5 first element of the list will be display  */
    @Input() rightIconLinks          : any[];
    @Input() hasAccountBtn           : boolean;
    @Input() isConnected             : boolean;

    @Input() hrefLogOut               : string;
    @Input() labelLogOut              : string;
    @Input() hrefConnexion            : string;
    @Input() labelConnexion           : string;
        /** String displayed before `accountName` in the Top Bar, when connected. */
    @Input() accountHello             : string;
    /** Name of the user, displayed in the Top Bar when connected. */
    @Input() accountName              : string;
    @Input() hasNoSearchBtn          : boolean;

    ngOnInit() {
        console.log('Header', this);
    }
}
