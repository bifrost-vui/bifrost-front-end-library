import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface ILogo {
    href: string;
    name: string;
}

@Component({
    selector: 'bf-footer',
    templateUrl: './footer.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class FooterComponent implements OnInit {
    constructor() {}

    /** Sets Footer Links on Bottom Footer. */
    @Input() linkFields: any[]; // TODO: Replace "any[]" with Link component definition

    /** Sets Footer Links. */
    @Input() links: any[]; // TODO: Replace "any[]" with Link component definition

    /**
     * - See [Logo Component API](/?path=/docs/components-logo--drupal).
     * - E.g. `logo = { href: "#", name: "videotron" }`.
     */
    @Input() logo: ILogo;

    @Input() hasBackToTopLink: boolean;
    @Input() backToTopLabel: string;

    @Input() isReduced: boolean;

    @Input() theme: string;
    @Input() reversed: boolean;
    @Input() languageBlock: any;
    @Input() langcode: 'EN' | 'FR';

    ngOnInit() {
        console.log('footer', this);
    }
}
