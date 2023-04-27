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
    /**
     * [Input Checkbox Option API](?path=/docs/components-input-checkbox-input-checkbox-option--drupal)
     * or [Selection Tile API](?path=/docs/components-selection-tile--drupal).
     */
    @Input() options: IInputCheckboxOption[] | ISelectionTile[];
    /**
     * Transform options as tiles. Then use options from
     * [Selection Tile API](?path=/story/components-selection-tile--drupal-selection-tile-vertical).
     */
    @Input() areOptionTiles: boolean;
    /**
     * - Define direction of the option list.
     * - Has effect only if `areOptionTiles = true`.
     */
    @Input() areOptionTilesInline: boolean;
    /**
     * - Define if optionTiles height are small (default) or large.
     * - Has effect only if `areOptionTiles = true`.
     */
    @Input() areOptionTilesLarge: boolean;
    @Input() errorMessage: string;

    @Input() class: string;

    ngOnInit() {
        console.log('InputCheckbox', this);
    }
}
