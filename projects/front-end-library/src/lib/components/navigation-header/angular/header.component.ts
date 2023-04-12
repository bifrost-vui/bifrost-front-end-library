import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ILink } from '../../../components/link/angular/api.model';

interface ILogo {
    href: string;
    name: string;
}

@Component({
    selector: 'bf-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    constructor() {}

    /** See [Logo Component API](/?path=/docs/components-logo--drupal). E.g. `logo = { href: "#", name: "videotron" }` */
    @Input() logo: ILogo;

    @Input() langcode: 'EN' | 'FR';

    @Input() navItems: any[];

    @Input() reversed: boolean;

    @Input() search_placeholder: string;

    @Input() theme: string;

    ngOnInit() {
        console.log('Header', this);
    }
}
