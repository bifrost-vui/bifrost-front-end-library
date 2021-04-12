import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

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

    @Input() breadcrumb         : object;
    @Input() badge              : string;
    @Input() upperTitle         : string;
    @Input() title              : string;
    @Input() subtitle           : string;
    @Input() description        : string;
    @Input() button             : object;
    @Input() image              : object;

    /**
        Insert the component BlockSelection. Explore its [Component API](/?path=/docs/components-block--drupal-selection).
    */
    @Input() blockSelection     : object;
    
    /** Class override */
    @Input() class              : string;
    @Input() reversed           : boolean;

    ngOnInit() {
        console.log('Hero', this);
    }
}
