import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ILink } from '../../../components/link/angular/api.model';

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

    @Input() reversed: boolean;

    /** See [Logo Component API](/?path=/docs/components-logo--drupal). E.g. `logo = { href: "#", name: "videotron" }` */
    @Input() logo: ILogo;

    @Input() search_placeholder: string;

    /** Note: TopBar is only visible on desktop. */
    @Input() hasTopBar: boolean;
    @Input() topBar_items: any[];
    @Input() topBar_secondaryItems: any[];

    @Input() navItems: any[];
    /** Maximum 5 first element of the list will be display  */
    @Input() rigthIconLinks: any[];
    @Input() hasAccountBtn: boolean;
    @Input() isConnected: boolean;

    @Input() hrefLogOut: string;
    @Input() labelLogOut: string;
    @Input() hrefConnexion: string;
    @Input() labelConnexion: string;

    /** String displayed before `accountLink` in the Top Bar, when connected. */
    @Input() accountHello: string;
    /** **Deprecated** use accountLink instead. Name of the user, displayed in the Top Bar when connected. */
    @Input() accountName: string;
    /** Link and Name of the user, displayed in the Top Bar when connected. */
    @Input() accountLink: ILink;

    // @Input() hasMiniCartBtn: boolean;
    @Input() hasNoSearchBtn: boolean;
    @Input() langcode : 'EN' | 'FR'

    ngOnInit() {
        console.log('Header', this);
    }
}