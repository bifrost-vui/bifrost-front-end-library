import {Component, ViewEncapsulation, OnInit, Input} from '@angular/core';

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
    constructor() {
    }

    @Input() dataDismiss: string;
    @Input() dataToggle: string;
    @Input() dataTarget: string;
    @Input() ariaControls: string;
    @Input() ariaLabel: string;
    @Input() extraAttribute: string;
    @Input() isDisabled: boolean;

    @Input() label: string;
    @Input() noUppercase: boolean;
    @Input() class: string;

    ngOnInit() {
        console.log('Chip', this);
    }
}
