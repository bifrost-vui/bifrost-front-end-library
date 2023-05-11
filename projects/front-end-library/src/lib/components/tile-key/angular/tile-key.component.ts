import { Component, OnInit, Input } from '@angular/core';
import { IIcon } from '../../icon/angular/api.model';
import { IImage } from './api.model';

@Component({
    selector: 'bf-tile-key',
    templateUrl: './tile-key.component.html',
})
export class TileKeyComponent implements OnInit {
    constructor() {}

    @Input() isClickable: boolean;
    @Input() href: string;
    @Input() title: string;
    @Input() titleTag: string;
    @Input() description: HTMLElement;
    @Input() linkLabel: string;
    /** Expected format: See [Icon API](/?path=/docs/components-icon--drupal-interface). */
    @Input() icon: IIcon;
    /** Expected format:
     * <pre>
     *     <code>
     *         {
     *             "src": `string`,
     *             "textColor": `"light"` | `"dark"`
     *         }
     *     </code>
     * </pre>
     */
    @Input() backgroundImage: IImage;
    @Input() backgroundColor: 'ground' | 'underground' | 'highlight';

    @Input() class: string;
    @Input() reversed: boolean;

    ngOnInit() {
        console.log('Tile Key', this);
    }
}
