import { Component, OnInit, Input } from '@angular/core';
import { IInputCheckboxOption } from '../../input-checkbox-option/angular/api.model';
import { ISelectionTile } from '../../selection-tile/angular/api.model';

@Component({
    selector: 'bf-input-checkbox',
    templateUrl: './input-checkbox.component.html',
})
export class InputCheckboxComponent implements OnInit {
    constructor() {}

    @Input() name: string;
    @Input() options: IInputCheckboxOption[] | ISelectionTile[];
    /** Transform options as tiles. Then use options from [Selection Tile API](?path=/story/components-selection-tile--drupal-selection-tile-vertical). */
    @Input() isOptionTiles: boolean;
    @Input() label: string;
    @Input() description: string;
    @Input() errorMessage: string;

    @Input() class: string;

    ngOnInit() {
        console.log('InputCheckbox', this);
    }
}