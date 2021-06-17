import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

/**
 * Description of the component SelectionTile
 *
 */
 
@Component({
  selector: 'bf-selection-tile',
  templateUrl: './selection-tile.component.html',
  // styleUrls: ['../scss/index.scss'],
})
export class SelectionTileComponent implements OnInit {
    constructor() {}

    /**
    * The inner text.
    *
    * @required
    */
    @Input() label: string;

    /** Class override */
    @Input() class: string;

    ngOnInit() {
        console.log('SelectionTile', this);
    }
}
