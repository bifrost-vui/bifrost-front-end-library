import { Component, OnInit, Input } from '@angular/core';
import { IFooter } from './api.model';

@Component({
    selector: 'bf-selection-tile',
    templateUrl: './selection-tile.component.html',
})
export class SelectionTileComponent implements OnInit {
    constructor() {}
    @Input() type: 'checkbox' | 'radio';
    @Input() id: string;
    @Input() name: string;
    @Input() value: string;
    @Input() isChecked: boolean;
    @Input() label: string;
    @Input() description: string;
    /** Only available for `orientation: vertical` and `fit: container`. */
    @Input() info: HTMLElement;
    @Input() isRequired: boolean;
    @Input() isInvalid: boolean;
    @Input() isDisabled: boolean;
    @Input() ariaLabel: string;
    @Input() orientation: 'horizontal' | 'vertical';
    /**
     * - Tile fits the content: `content`
     * - Tile fits the container: `container`
     */
    @Input() fit: 'content' | 'container'; // TODO - revisit the fit behavior : hug content vs max width
    /** Expected format:
     * <pre>
     *     <code>
     *         {
     *             "src": `string`,
     *             "alt": `string`,
     *             "class": `string`
     *         }
     *     </code>
     * </pre>
     */
    @Input() image: object;
    @Input() iconName: string;
    @Input() content: HTMLElement | 'TwigBlock';
    /**
     * __Only available for `orientation: horizontal`.__
     *
     * Expected format:
     * <pre>
     *     <code>
     *         {
     *             "description": `HTMLElement`,
     *             "link": `ILink` [see API](/?path=/docs/components-link--drupal#component-api),
     *             "iconName": `string`,
     *             "image": {
     *                 "src": `string`,
     *                 "alt": `string`
     *             }
     *         }
     *     </code>
     * </pre>
     */
    @Input() footer: IFooter;

    /** Extra attributes for radio/checkbox inputs. */
    @Input() extraAttribute: string;
    /** Class override */
    @Input() class: string;

    ngOnInit() {
        console.log('SelectionTile', this);
    }
}
