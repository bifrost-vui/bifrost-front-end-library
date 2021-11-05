import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { Url } from 'url';


@Component({
  selector: 'bf-selection-tile',
  templateUrl: './selection-tile.component.html',
  // styleUrls: ['../scss/index.scss'],
})
export class SelectionTileComponent implements OnInit {
    constructor() {}

    /** Class override */
    @Input() class          : string;
    @Input() inputType      : 'checkbox'|'radio';
    @Input() inputId        : string;
    @Input() value          : string;
    @Input() ariaLabel      : string;
    @Input() name           : string;
    /** extra attribute for the radio/checkbox input */
    @Input() extraAttribute : string
    @Input() orientation    : 'horizontal'|'vertical';
    /**  Tile  fits the content | Tile fits the container  */
    @Input() fit            : 'content'|'container';
    @Input() title          : string;
    @Input() description    : string;
    @Input() info           : string;
    /**{ src : string, alt : string, class : string } */
    @Input() image          : object;
    @Input() iconName       : string;
    @Input() reversed       : boolean;
    @Input() isDisabled     : boolean;
    @Input() isSelected     : boolean;
    @Input() isInvalid      : boolean;
    @Input() errorMessage   : string;
    @Input() required       : boolean;

    ngOnInit() {
        console.log('SelectionTile', this);
    }
}
