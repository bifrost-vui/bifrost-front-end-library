import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bf-selection-tile',
  templateUrl: './selection-tile.component.html',
})
export class SelectionTileComponent implements OnInit {
    constructor() {}

    @Input() type           : 'checkbox'|'radio';
    @Input() id             : string;
    @Input() name           : string;
    @Input() value          : string;
    @Input() isChecked      : boolean;
    @Input() label          : string;
    @Input() description    : string;
    @Input() info           : string;
    /**{ src : string, alt : string, class : string } */
    @Input() image          : object;
    @Input() iconName       : string;
    @Input() isRequired     : boolean;
    @Input() isDisabled     : boolean;
    @Input() isInvalid      : boolean;
    @Input() ariaLabel      : string;
    @Input() errorMessage   : HTMLElement;
    @Input() orientation    : 'horizontal'|'vertical';
    /**  Tile  fits the content | Tile fits the container  */
    @Input() fit            : 'content'|'container';
    @Input() content        : string | 'TwigBlock';

    /** extra attribute for the radio/checkbox input */
    @Input() extraAttribute : string
    @Input() reversed       : boolean;
    /** Class override */
    @Input() class          : string;

    ngOnInit() {
        console.log('SelectionTile', this);
    }
}
