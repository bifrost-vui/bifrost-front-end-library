import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

interface IImage {
    src             : string;
    alt             : string;
    fit             : 'fit' | 'fill';
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

    /** Expected format: `{ src, alt, fit, backgroundColor }` */
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
