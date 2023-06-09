import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IAccount, IHeaderLogo, IMenuItems, ITopBar } from './api.model';
@Component({
    selector: 'bf-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    constructor() {}

    /** Expected format:
     * <pre>
     *    <code>
     *        {
     *            "firstName": `string`,
     *            "lastName": `string`,
     *            "links": [
     *                {
     *                    "href": `string`,
     *                    "icon": `string`,
     *                    "subtitle": `string`,
     *                    "title": `string`
     *                },
     *                ...
     *            ]
     *        }
     *    </code>
     * </pre>
     *
     * For `links.icon`, see [Icon Interface List](/?path=/story/components-icon--drupal-interface).
     */
    @Input() accountData: IAccount = null;
    @Input() hasTopBar: boolean = true;
    @Input() langcode: 'en' | 'fr' = 'en';
    /** Expected format:
     * <pre>
     *    <code>
     *        {
     *            "href": `string`,
     *            "name": `ILogo['name']`,
     *        }
     *    </code>
     * </pre>
     *
     * For the `name`, see [Logo Component API](/?path=/docs/components-logo--drupal).
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
     *                 "class": `string`,
     *                 "href": `string`,
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
