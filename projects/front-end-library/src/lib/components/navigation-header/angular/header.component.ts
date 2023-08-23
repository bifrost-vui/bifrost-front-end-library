import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IAccount, IHeaderLogo, IMenuItem, ITopBar } from './api.model';
@Component({
    selector: 'bf-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    constructor() {}

    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * See IAccount <a href="/?path=/docs/components-navigation-header-api--page#iaccount-api" target="_blank">API</a>
     *  and <a href="/?path=/docs/components-navigation-header-api--page#iaccount-format" target="_blank">expected format</a>.
     */
    @Input() accountData: IAccount = null;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * When anonymously browsing, meaning without being connected to an account,
     * this is the link on the "Sign In" button to access the login form.
     */
    @Input() accountSignInURL: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Display or not the top bar above main header bar
     */
    @Input() hasTopBar: boolean = true;
    /** <span style="color: orange;">__Optional__</span> */
    @Input() langcode: 'en' | 'fr' = 'en';
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * See IHeaderLogo <a href="/?path=/docs/components-navigation-header-api--page#iheaderlogo-api" target="_blank">API</a>
     *  and <a href="/?path=/docs/components-navigation-header-api--page#iheaderlogo-format" target="_blank">expected format</a>.
     */
    @Input() logo: IHeaderLogo;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * See IMenuItem <a href="/?path=/docs/components-navigation-header-api--page#imenuitem-api" target="_blank">API</a>
     *  and <a href="/?path=/docs/components-navigation-header-api--page#imenuitem-format" target="_blank">expected format</a>.
     */
    @Input() mainMenuData: IMenuItem[];
    /** <span style="color: orange;">__Optional__</span> */
    @Input() reversed: boolean = false;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Search field placeholder text
     */
    @Input() searchPlaceholder: string = 'What are you looking for?';
    /**
     * Header's `data-theme` attribute
     * @ignore
     */
    @Input() theme: 'videotron' | 'business' = 'videotron';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * See ITopBar <a href="/?path=/docs/components-navigation-header-api--page#itopbar-api" target="_blank">API</a>
     *  and <a href="/?path=/docs/components-navigation-header-api--page#itopbar-format" target="_blank">expected format</a>.
     */
    @Input() topBarData: ITopBar;

    ngOnInit() {
        console.log('Header', this);
    }
}
