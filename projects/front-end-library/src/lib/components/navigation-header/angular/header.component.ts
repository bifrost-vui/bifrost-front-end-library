import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ILink } from '../../../components/link/angular/api.model';

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
    @Input() langcode: 'EN' | 'FR';
    /** See [Logo Component API](/?path=/docs/components-logo--drupal). E.g. `logo = { href: "#", name: "videotron" }` */
    @Input() logo: ILogo;
    @Input() mainMenuItems: IMenuItems[];
    @Input() reversed: boolean;
    @Input() search_placeholder: string;
    @Input() theme: string;

    ngOnInit() {
        console.log('Header', this);
    }
}
