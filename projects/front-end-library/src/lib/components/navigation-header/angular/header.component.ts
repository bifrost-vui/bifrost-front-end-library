import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ILink } from '../../../components/link/angular/api.model';

interface ITopBarMenuItems {
    class?: string;
    href: string;
    label: string;
    rel?: string;
}

interface ITopBar {
    left?: ITopBarMenuItems[];
    right?: ITopBarMenuItems[];
}

interface ILogo {
    href: string;
    name: string;
}

interface IMenuItems {
    class?: string;
    color?: string;
    href: string;
    label: string;
    subItems?: IMenuItems[];
}

interface IAccount {
    firstName: string;
    lastName: string;
    links: IAccountLink[];
}

interface IAccountLink {
    href: string;
    icon: string;
    subtitle?: string;
    title: string;
}

@Component({
    selector: 'bf-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    constructor() {}

    @Input() accountData: IAccount;
    @Input() hasTopBar: boolean = true;
    @Input() langcode: 'EN' | 'FR';
    /** See [Logo Component API](/?path=/docs/components-logo--drupal). E.g. `logo = { href: "#", name: "videotron" }` */
    @Input() logo: ILogo;
    @Input() mainMenuItems: IMenuItems[];
    @Input() reversed: boolean = false;
    @Input() searchPlaceholder: string;
    @Input() theme: string;
    @Input() topBarData: ITopBar;

    ngOnInit() {
        console.log('Header', this);
    }
}
