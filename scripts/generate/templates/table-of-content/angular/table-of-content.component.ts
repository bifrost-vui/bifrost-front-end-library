import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

/**
 * Description of the component TableOfContent
 *
 */
 
@Component({
  selector: 'bf-table-of-content',
  templateUrl: './table-of-content.component.html',
  // styleUrls: ['../scss/index.scss'],
})
export class TableOfContentComponent implements OnInit {
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
        console.log('TableOfContent', this);
    }
}
