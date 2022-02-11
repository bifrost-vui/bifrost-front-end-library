import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

/**
 * Description of the component TableContent
 *
 */

@Component({
  selector: 'bf-table-content',
  templateUrl: './table-content.component.html',
  // styleUrls: ['../scss/index.scss'],
})
export class TableContentComponent implements OnInit {
    constructor() {}

    /**
    * The inner text.
    *
    * @required
    */

    @Input() navItems     : Array<object>[];
    @Input() label        : string;
    @Input() reversed     : boolean;
    @Input() class        : string;
    @Input() isDisabled   : boolean;
    @Input() orientation  : 'horizontal'|'vertical';

    ngOnInit() {
        console.log('TableContent', this);
    }
}
