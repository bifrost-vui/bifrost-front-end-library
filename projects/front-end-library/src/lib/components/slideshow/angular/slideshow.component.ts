import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

/**
 * Description of the component Slideshow
 *
 */

@Component({
  selector: 'bf-slideshow',
  templateUrl: './slideshow.component.html',
  // styleUrls: ['../scss/index.scss'],
})
export class SlideshowComponent implements OnInit {
    constructor() {}
    @Input() slides: object;
    @Input() slidestype : 'img' |'hero';
    /** Class override */
    @Input() class: string;

    ngOnInit() {
        console.log('Slideshow', this);
    }
}
