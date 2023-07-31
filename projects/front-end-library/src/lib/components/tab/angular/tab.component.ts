import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ILink } from '../../link/angular/api.model';
import { INavItems } from './api.model';

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */

@Component({
    selector: 'bf-tab',
    templateUrl: './tab.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class TabComponent implements OnInit {
    constructor() {}

    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on the tab component main container.
     */
    @Input() class: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on each tab navigation button.
     */
    @Input() itemClass: string;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * - Tab items.
     * - See INavItems <a href="/?path=/docs/components-tab-api--page#inavitems-api" target="_blank">API</a>
     *    and <a href="/?path=/docs/components-tab-api--page#inavitems-format" target="_blank">expected format</a>.
     *
     * @required
     */
    @Input() navItems: INavItems[];
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on the container of the tab items.
     */
    @Input() sliderClass: string;

    ngOnInit() {
        console.log('Tab', this);
    }
}
