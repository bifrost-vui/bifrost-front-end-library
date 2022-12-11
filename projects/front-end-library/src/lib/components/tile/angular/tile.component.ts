import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */

@Component({
    selector: 'bf-tile',
    templateUrl: './tile.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class TileComponent implements OnInit {
    constructor() {}

    @Input() content: string;

    @Input() href: string;
    @Input() isDisabled: boolean;

    @Input() class: string;
    @Input() reversed: boolean;

    ngOnInit() {
        console.log('tile', this);
    }
}
