import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { ILink } from '../../link/angular/api.model';
import {HTMLElement} from '@webcomponents/custom-elements/src/Patch/Native';

interface IFooter{
    text: HTMLElement;
    link: ILink;
    iconName: string;
    image:{
        src: string,
        alt:string
    }
}

@Component({
  selector: 'bf-selection-tile',
  templateUrl: './selection-tile.component.html',
  // styleUrls: ['../scss/index.scss'],
})
export class SelectionTileComponent implements OnInit {
    constructor() {}

    /** Class override */
    @Input() class: string;
    @Input() type: 'checkbox'|'radio';
    @Input() inputId: string;
    @Input() value: string;
    @Input() name: string;
    @Input() ariaLabel: string;
    /** extra attribute for the radio/checkbox input */
    @Input() extraAttribute: string
    @Input() orientation: 'horizontal'|'vertical';
    /**  Tile  fits the content | Tile fits the container (up to 20.5rem)  */
    @Input() fit: 'content'|'container';//hug content vs max width
    @Input() title: string;
    @Input() description: string;
    /** Only available if the tile fits container and is vertical */
    @Input() info: HTMLElement;
    /**{ src: string, alt: string, class: string } */
    @Input() image: object;
    @Input() iconName: string;
    @Input() reversed: boolean;
    @Input() isDisabled: boolean;
    @Input() isSelected: boolean;
    @Input() isInvalid: boolean;
    @Input() errorMessage: string;
    @Input() isRequired: boolean;
    @Input() content: HTMLElement | 'TwigBlock';
    /** For horizontal tile only. Expected : {text: HTMLElement, link: {label:string, href:string} iconName: string, image:{ src: string, alt:string }} */
    @Input() footer: IFooter;

    ngOnInit() {
        console.log('SelectionTile', this);
    }
}