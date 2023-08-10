import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { IPrice } from '../../price/angular/api.model';
import { IBadge } from '../../badge/angular/api.model';
import { IBlockSelection } from '../../block-selection/angular/api.model';

@Component({
    selector: 'bf-hero',
    templateUrl: './hero.component.html',
    // styleUrls: ['../scss/index.scss'],
})
export class HeroComponent implements OnInit {
    constructor() {}

    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Background color of the hero.
     */
    @Input() background: 'ground' | 'underground' | 'highlight' = 'underground';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - This badge displays between the `breadcrumb` and the `upperTitle`.
     * - See Badge Component [API](/?path=/docs/components-badge--drupal).
     */
    @Input() badge: IBadge;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Does not work if there is an `image` and `image.isSplitted: true`.
     * - It displays on the right side of the hero banner.
     * - It uses the `Block Selection` component or you can pass
         your own content with `blockSelection` Twig block.
     * - If you use the `Block Selection` component,
         see its [API](/?path=/docs/components-block-selection--drupal).
     */
    @Input() blockSelection: IBlockSelection | 'TwigBlock';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It displays at the top of the component.
     * - You can pass your own HTML code directly with the `breadcrumb` prop
         or you can pass it through the `breadcrumb` Twig block.
     */
    @Input() breadcrumb: HTMLElement | 'TwigBlock';
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
