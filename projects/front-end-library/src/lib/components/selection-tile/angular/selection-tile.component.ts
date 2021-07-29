import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

/**
 * Description of the component SelectionTile
 *
 */
 interface IImage {
  src : string,
  alt : string,
  class : string
}

@Component({
  selector: 'bf-selection-tile',
  templateUrl: './selection-tile.component.html',
  // styleUrls: ['../scss/index.scss'],
})
export class SelectionTileComponent implements OnInit {
    constructor() {}

    /** Class override */
    @Input() class        : string;
    @Input() inputType    : 'checkbox'|'radio';
    @Input() inputId      : string;
    @Input() value        : string;
    @Input() ariaLabel    : string;
    @Input() name         : string;

    @Input() orientation : 'horizontal'|'vertical';
    @Input() size        : 'small'|'large';
    @Input() title       : string;
    @Input() description : string;
    @Input() info        : string;
    @Input() image       : IImage;
    @Input() reversed    : boolean;
    @Input() isDisabled  : boolean;
    @Input() isSelected  : boolean;

    ngOnInit() {
        console.log('SelectionTile', this);
    }
}
