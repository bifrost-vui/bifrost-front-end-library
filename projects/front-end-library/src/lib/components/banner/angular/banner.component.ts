import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */

@Component({
    selector: 'bf-banner',
    templateUrl: './banner.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class BannerComponent implements OnInit {
    constructor() {}

    @Input() href: string;
    @Input() title: string;
    /**
     * Note: Wrap your data with a semantic HTML tag.
     *
     * E.g. `description_html: "<p>this is a description</p>"`
     */
    @Input() description_html: HTMLElement;
    @Input() linkLabel: string;
    @Input() image: object;
    @Input() iconName: string;
    /**
     * You can pass directly the **label** in string format or an object
     * based on [Badge](/?path=/docs/components-badge--drupal) component API.
     */
    @Input() badge: any;
    @Input() class: string;
    @Input() reversed: boolean;
    @Input() isClickable: boolean;

    ngOnInit() {
        console.log('banner', this);
    }
}
