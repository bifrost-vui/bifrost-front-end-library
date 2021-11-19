import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { IPrice } from '../../price/angular/price.component';

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

    @Input() breadcrumb         : string;
    /**
        You can pass directly the **label** as a **string** or an **object** based on [Badge](/?path=/docs/components-badge--drupal) component API.
    */
    @Input() badge              : any;
    @Input() upperTitle         : string;
    @Input() title              : string;
    @Input() subtitle           : string;
    @Input() description        : string;
  /**
   Insert buttons (max of 2 buttons). Explore its [Component API](/?path=/docs/components-button--drupal).
   */
    @Input() buttons            : Array<object>[];
    /**
        [Price](/?path=/docs/components-price--drupal) component.
    */
    @Input() price              : IPrice;
    /** HTML string or TwigBlock. Will be displayed between the description and the buttons. */
    @Input() content            : string | 'TwigBlock';
    /**
     You can pass directly the **name** of the icon as a **string** or an **object** based on [Icon component API](/?path=/docs/components-icon--drupal).
      The **size** is always override with **huge**
     */
    @Input() icon               : any;
    /** Add `isSplitted: true` to display the image on the right side only. */
    @Input() image              : object;
    @Input() background         : 'ground' | 'underground' | 'highlight';

    /**
        Insert the component BlockSelection. Explore its [Component API](/?path=/docs/components-block--drupal-selection).
    */
    @Input() blockSelection     : object | 'TwigBlock';

    /** Class override */
    @Input() class              : string;
    /** Note: Fixed-height is 65vh on desktop and 90vh on mobile */
    @Input() isFixedHeight      : boolean;
    @Input() reversed           : boolean;

    @Input() language           : 'en' | 'fr';

    ngOnInit() {
        console.log('Hero', this);
    }
}