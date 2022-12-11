import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-text-featured',
    templateUrl: './text-featured.component.html',
})
export class TextFeaturedComponent implements OnInit {
    constructor() {}

    @Input() spacingLeft: number;
    @Input() textFeatured_content: HTMLElement | 'TwigBlock';
    @Input() class: string;

    ngOnInit() {
        console.log('TextFeatured', this);
    }
}
