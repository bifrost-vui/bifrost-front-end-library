import { Component, OnInit, Input } from '@angular/core';
import { IButton } from '../../button/angular/api.model';
import { ILink } from '../../link/angular/api.model';
import { IRowButton } from '../../row-button/angular/api.model';

interface IImage {
    src: string;
    icon: object | string;
    isFill: boolean;
}

@Component({
    selector: 'bf-basic-content',
    templateUrl: './basic-content.component.html',
})
export class BasicContentComponent implements OnInit {
    constructor() {}

    /** Expected format:
     * <pre>
     *     <code>
     *         image: {
     *             "src": `string`,
     *             "isFill": `boolean`,
     *             "icon": {
     *                 "name": `string`,
     *                 "position": `string`
     *             }
     *         }
     *     </code>
     * </pre>
     *
     * Icon position choices:
     * `image.icon.position: "bottom-left" | "bottom-right" | "top-left" | "top-right" | "center"`
     */
    @Input() image: IImage;
    @Input() upperTitle: string;
    @Input() title: string;
    @Input() titleTag: string;
    @Input() subtitle: string;
    /** It will not work with image, only with text. */
    @Input() textAlign: 'left' | 'center';
    @Input() description: HTMLElement;
    @Input() buttons: IButton[];
    @Input() links: ILink[];
    @Input() rowButtons: IRowButton[];
    @Input() imagePosition: 'right' | 'left';
    @Input() background: 'ground' | 'underground';

    @Input() class: string;
    @Input() reversed: boolean;

    ngOnInit() {
        console.log('basic content', this);
    }
}
