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
    @Input() slides: Array<object>[];
    
    ngOnInit() {
        console.log('Slideshow', this);
    }
}
