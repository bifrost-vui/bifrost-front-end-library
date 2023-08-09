import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { IPrice } from '../../price/angular/api.model';

/**
 * Description of the component Hero
 *
 */

@Component({
    selector: 'bf-hero',
    templateUrl: './hero.component.html',
    // styleUrls: ['../scss/index.scss'],
})
export class HeroComponent implements OnInit {
    constructor() {}

    @Input() background: 'ground' | 'underground' | 'highlight';
    /**
     * You can pass directly the **label** as a **string** or an **object** based on
     * [Badge](/?path=/docs/components-badge--drupal) component API.
     */
    @Input() badge: any;
    /**
     * - Does not work if there is an `image` and `image.isSplitted: true`.
     * - Insert the component BlockSelection.
     * - Explore its [Component API](/?path=/docs/components-block--drupal-selection).
     */
    @Input() blockSelection: object | 'TwigBlock';
    @Input() breadcrumb: string;
    /**
     * - Insert buttons (max of 2 buttons).
     * - Explore its [Component API](/?path=/docs/components-button--drupal).
     */
    @Input() buttons: Array<object>[];
    /** Class override. */
    @Input() class: string;
    /** HTML string or TwigBlock. Will be displayed between the description and the buttons. */
    @Input() content: string | 'TwigBlock';
    @Input() description: string;
    /** Note: height large will add a min-height of 60vh. */
    @Input() height: '' | 'large';
    /**
     * - You can pass directly the **name** of the icon as a **string** or an **object**
     * based on [Icon component API](/?path=/docs/components-icon--drupal).
     * - The **size** is always override with **huge**.
     */
    @Input() icon: any;
    /** Add `isSplitted: true` to display the image on the right side only. */
    @Input() image: object;
    @Input() language: 'en' | 'fr';
    /** [Price](/?path=/docs/components-price--drupal) component. */
    @Input() price: IPrice;
    @Input() reversed: boolean;
    @Input() subtitle: string;
    @Input() title: string;
    @Input() upperTitle: string;

    ngOnInit() {
        console.log('Hero', this);
    }
}
