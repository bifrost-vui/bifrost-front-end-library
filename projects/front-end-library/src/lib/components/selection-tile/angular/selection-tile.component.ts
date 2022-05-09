import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { ILink } from '../../link/angular/api.model';

interface IFooter{
    description: HTMLElement;
    link: ILink;
    iconName: string;
    image: {
        src: string,
        alt: string
    }
}

@Component({
  selector: 'bf-selection-tile',
  templateUrl: './selection-tile.component.html',
})
export class SelectionTileComponent implements OnInit {
    constructor() {}
    @Input() type: 'checkbox' | 'radio';
    @Input() inputId: string;
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
    @Input() errorMessage: string;
    @Input() ariaLabel: string;
    @Input() orientation: 'horizontal' | 'vertical';
    /**  Tile  fits the content | Tile fits the container */
    @Input() fit: 'content' | 'container'; // TODO - revisit the fit behavior : hug content vs max width
    /** Expected format: `{ src: string, alt: string, class: string }` */
    @Input() image: object;
    @Input() iconName: string;
    @Input() content: HTMLElement | 'TwigBlock';
    /** Only available for `orientation: horizontal`. Expected format: { description: HTMLElement, link: { label: string, href: string }, iconName: string, image: { src: string, alt: string } } */
    @Input() footer: IFooter;

    /** Extra attributes for radio/checkbox inputs. */
    @Input() extraAttribute: string
    /** Class override */
    @Input() class: string;
    @Input() reversed: boolean;

    ngOnInit() {
        console.log('SelectionTile', this);
    }
}
