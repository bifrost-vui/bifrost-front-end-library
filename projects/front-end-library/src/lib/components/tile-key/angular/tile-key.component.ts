import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

interface IImage {
    src         : string;
}

interface IIcon {
    name        : string;
    src         : string;
    color       : null | 'success' | 'neutral' | 'warning' | 'negative';
}

@Component({
    selector: 'bf-tile-key',
    templateUrl: './tile-key.component.html',
})
export class TileKeyComponent implements OnInit {
    constructor() {}

    @Input() isClickable        : boolean;
    @Input() href               : string;
    @Input() title              : string;
    @Input() titleTag           : string;
    @Input() description        : string;
    @Input() linkLabel          : string;
    /** Expected format: See [Icon API](?path=/docs/components-icon--drupal-interface). */
    @Input() icon               : IIcon;
    /** Expected format: `{ src: "my-image.png" }` */
    @Input() backgroundImage    : IImage;
    @Input() backgroundColor    : 'ground' | 'underground' | 'highlight';

    @Input() class              : string;
    @Input() reversed           : boolean;

    ngOnInit() {
        console.log('Tile Key', this);
    }

}
