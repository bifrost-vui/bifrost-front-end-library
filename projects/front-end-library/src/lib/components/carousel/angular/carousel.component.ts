import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

/**
 * Description of the component Carousel
 *
 */

@Component({
    selector: 'bf-carousel',
    templateUrl: './carousel.component.html',
    // styleUrls: ['../scss/index.scss'],
})
export class CarouselComponent implements OnInit {
    constructor() {}

    /**
     * The inner text.
     *
     * @required
     */
    @Input() label: string;

    /** Class override */
    @Input() class: string;

    ngOnInit() {
        console.log('Carousel', this);
    }
}
