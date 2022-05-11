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
    @Input() label: string;
    @Input() description: string;
    @Input() options: IInputCheckboxOption[] | ISelectionTile[];
    /** Transform options as tiles. Then use options from [Selection Tile API](?path=/story/components-selection-tile--drupal-selection-tile-vertical). */
    @Input() isOptionTiles: boolean;
    /** Define orientation of the Component Selection Tile and the direction of the option list. Has effect only if `isOptionTiles = true`. */
    @Input() optionTilesOrientation: 'horizontal' | 'horizontal-inline' | 'vertical-inline';
    @Input() errorMessage: string;

    @Input() class: string;

    ngOnInit() {
        console.log('InputCheckbox', this);
    }
}