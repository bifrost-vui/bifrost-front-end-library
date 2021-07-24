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
    @Input() class: string;
    /** required */
    @Input() inputType   : 'radio'|'checkbox';
    /** required */
    @Input() inputId      : string;
    /** required */
    @Input() value      : string;
    /** required */
    @Input() ariaLabel    : string;
    @Input() name         : string;

    @Input() orientation : 'vertical'|'horizontal';
    @Input() size        : 'small'|'large';
    @Input() reversed    : boolean;
    @Input() isDisabled  : boolean; 
    @Input() isSelected  : boolean; 

    @Input() title       : string;
    @Input() description : string;
    @Input() info        : string;
        /** Expected format:
    ```jsx
        {
            src   : "/foldername/foldername/my-image.svg",
            alt   : "image alternative text",
            class : "optional-class-name"
            }
    ```
    */
    @Input() image       : IImage;



    ngOnInit() {
        console.log('SelectionTile', this);
    }
}
