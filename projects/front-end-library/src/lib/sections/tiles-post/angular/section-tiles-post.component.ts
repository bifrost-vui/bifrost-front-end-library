import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-section-tiles-post',
    templateUrl: './section-tiles-post.component.html',
})
export class SectionTilesPostComponent implements OnInit {
    constructor() {}

    @Input() title: string;
    @Input() titleTag: string;
    /** Same API as [Tile Post Component API](/?path=/docs/components-tile-post--drupal) + `size: default | large`.*/
    @Input() tiles: object[];
    @Input() background: 'ground' | 'underground';

    @Input() class: string;
    @Input() reversed: boolean;

    ngOnInit() {
        console.log('Section Tiles Post', this);
    }
}
