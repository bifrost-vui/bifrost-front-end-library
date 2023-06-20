import { Component, Input } from '@angular/core';
import { IAccount, IAccountLink, IHeaderLogo } from './api.model';
import { ILogo } from '../../../components/logo/angular/api.model';

@Component({
    selector: '',
})
export class AccountAPI implements IAccount {
    @Input() firstName: string;
    @Input() lastName: string;
    /**
     * See IAccountLink <a href="#iaccountlink-api" target="_self">API</a>
     *  and <a href="#iaccountlink-format" target="_self">expected format</a>.
     */
    @Input() links: IAccountLink[];
}

@Component({
    selector: '',
})
export class AccountLinkAPI implements IAccountLink {
    @Input() href: string;
    /** See [Icons - Interface List](/?path=/story/components-icon--drupal-interface) for icon names. */
    @Input() icon: string;
    @Input() subtitle?: string;
    @Input() title: string;
}

@Component({
    selector: '',
})
export class HeaderLogoAPI implements IHeaderLogo {
    href: string;
    /** See Logo Component [API](/?path=/docs/components-logo--drupal). */
    name: 'videotron' | 'business';
}
