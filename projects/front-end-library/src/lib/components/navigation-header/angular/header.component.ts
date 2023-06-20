import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IAccount, IHeaderLogo, IMenuItems, ITopBar } from './api.model';
@Component({
    selector: 'bf-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    constructor() {}

    /**
     * See IAccount <a href="/?path=/docs/components-navigation-header-api--page#iaccount-api" target="_blank">API</a>
     *  and <a href="/?path=/docs/components-navigation-header-api--page#iaccount-format" target="_blank">expected format</a>.
     */
    @Input() accountData: IAccount = null;
    /**
     * When anonymously browsing, meaning without being connected to an account,
     * this is the link on the "Sign In" button to access the login form.
     */
    @Input() accountSignInURL: string;
    /** Display or not the top bar above main header bar */
    @Input() hasTopBar: boolean = true;
    @Input() langcode: 'en' | 'fr' = 'en';
    /**
     * See IHeaderLogo <a href="/?path=/docs/components-navigation-header-api--page#iheaderlogo-api" target="_blank">API</a>
     *  and <a href="/?path=/docs/components-navigation-header-api--page#iheaderlogo-format" target="_blank">expected format</a>.
     */
    @Input() logo: IHeaderLogo;
    /** Expected format:
     * <pre>
     *     <code>
     *         [
     *             {
     *                 "class": `string`,
     *                 "color": `string`,
     *                 "href": `string`,
     *                 "label": `string`,
     *                 "subItems": `IMenuItems[]`,
     *             },
     *             {...},
     *         ]
     *     </code>
     * </pre>
     */
    @Input() mainMenuData: IMenuItems[];
    @Input() reversed: boolean = false;
    @Input() searchPlaceholder: string = 'What are you looking for?';
    /**
     * Header's `data-theme` attribute
     * @ignore
     */
    @Input() theme: 'videotron' | 'business' = 'videotron';
    /** Expected format:
     * <pre>
     *     <code>
     *         [
     *             {
     *                 "activeParams": `IActiveMenuItemParams`,
     *                 "class": `string`,
     *                 "href": `string`,
     *                 "isActive": `boolean`,
     *                 "isActiveLinkClickable": `boolean`,
     *                 "label": `string`,
     *                 "rel": `string`,
     *             },
     *             {...},
     *         ]
     *     </code>
     * </pre>
     */
    @Input() topBarData: ITopBar;

    ngOnInit() {
        console.log('Header', this);
    }
}
