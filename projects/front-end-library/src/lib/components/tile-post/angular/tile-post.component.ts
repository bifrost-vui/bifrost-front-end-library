import { Component, OnInit, Input } from '@angular/core';

interface IImage {
    src             : string;
    alt             : string;
    backgroundColor : string;
}

interface ILink {
    href        : string;
    label       : string;
}

@Component({
    selector: 'bf-tile-post',
    templateUrl: './tile-post.component.html',
})
export class TilePostComponent implements OnInit {
    constructor() {}

    /** API: `{ src, alt, backgroundColor }` */
    @Input() image              : IImage;
    @Input() title              : string;
    @Input() titleTag           : string;
    @Input() description        : string;
    @Input() link               : ILink;
    @Input() isFeatured         : boolean;

    @Input() class              : string;
    @Input() reversed           : boolean;

    ngOnInit() {
        console.log('Tile Post', this);
    }

}
