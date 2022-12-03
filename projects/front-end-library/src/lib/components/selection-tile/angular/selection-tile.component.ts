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
    /**  Tile  fits the content | Tile fits the container */
    @Input() fit: 'content' | 'container'; // TODO - revisit the fit behavior : hug content vs max width
    /** Expected format: `{ src: string, alt: string, class: string }` */
    @Input() image: object;
    @Input() iconName: string;
    @Input() content: HTMLElement | 'TwigBlock';
    /** Only available for `orientation: horizontal`. Expected format: { description: HTMLElement, link: { label: string, href: string, ... }, iconName: string, image: { src: string, alt: string } } */
    @Input() footer: IFooter;

    /** Extra attributes for radio/checkbox inputs. */
    @Input() extraAttribute: string
    /** Class override */
    @Input() class: string;

    ngOnInit() {
        console.log('SelectionTile', this);
    }
}