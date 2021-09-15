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

    @Input() breadcrumb         : 'TwigBlock';
    /**
        You can pass directly the **label** as a **string** or an **object** based on [Badge](/?path=/docs/components-badge--drupal) component API.
    */
    @Input() badge              : any;
    @Input() upperTitle         : string;
    @Input() title              : string;
    @Input() subtitle           : string;
    @Input() description        : string;
    /**
        [Price](/?path=/docs/components-price--drupal) component.
    */
    @Input() price              : IPrice;
    @Input() button             : object;
    @Input() image              : object;
    @Input() background         : 'ground' | 'underground' | 'highlight';

    /**
        Insert the component BlockSelection. Explore its [Component API](/?path=/docs/components-block--drupal-selection).
    */
    @Input() blockSelection     : object | 'TwigBlock';
    
    /** Class override */
    @Input() class              : string;
    @Input() reversed           : boolean;

    @Input() language           : 'en' | 'fr';

    ngOnInit() {
        console.log('Hero', this);
    }
}
