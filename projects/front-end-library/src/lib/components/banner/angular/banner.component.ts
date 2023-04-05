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
        Data from **paragraph** comes from rich text editor, so this string is HTML code.
        `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`
    */
    @Input() paragraph: string;
    @Input() linkLabel: string;
    @Input() image: object;
    @Input() iconName: string;
    /**
        You can pass directly the **label** in string format or an object based on [Badge](/?path=/docs/components-badge--drupal) component API.
    */
    @Input() badge: any;
    @Input() class: string;
    @Input() reversed: boolean;
    @Input() isClickable: boolean;

    ngOnInit() {
        console.log('banner', this);
    }
}
