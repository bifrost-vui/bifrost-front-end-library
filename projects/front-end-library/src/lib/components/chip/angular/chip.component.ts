import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

/**
 * Description of the component Chip
 *
 */

@Component({
  selector: 'bf-chip',
  templateUrl: './chip.component.html',
  // styleUrls: ['../scss/index.scss'],
})
export class ChipComponent implements OnInit {
    constructor() {}

    @Input() label: string;
    @Input() class: string;

    ngOnInit() {
        console.log('Chip', this);
    }
}
