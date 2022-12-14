import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-image-lazy-load',
    templateUrl: './image-lazy-load.component.html',
})
export class ImageLazyLoadComponent implements OnInit {
    constructor() {}

    @Input() containerClass: string;
    @Input() isSquareMode: boolean;
    @Input() alt: string;
    @Input() src: string;

    /** Class override */
    @Input() class: string;

    ngOnInit() {
        console.log('ImageLazyLoad', this);
    }
}
