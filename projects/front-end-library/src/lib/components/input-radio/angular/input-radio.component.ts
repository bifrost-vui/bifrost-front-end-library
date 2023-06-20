import { Component, OnInit, Input } from '@angular/core';
import { IInputRadioOption } from '../../input-radio-option/angular/api.model';
import { ISelectionTile } from '../../selection-tile/angular/api.model';

@Component({
    selector: 'bf-input-radio',
    templateUrl: './input-radio.component.html',
})
export class InputRadioComponent implements OnInit {
    constructor() {}

    @Input() name: string;
    @Input() label: string;
    @Input() description: string;
    /**
     * [Input Radio Option API](?path=/docs/components-input-radio-input-radio-option--drupal)
     * or [Selection Tile API](?path=/docs/components-selection-tile--drupal).
     */
    @Input() options: IInputRadioOption[] | ISelectionTile[];
    /**
     * Transform options as tiles. Then use options from
     * [Selection Tile API](?path=/story/components-selection-tile--drupal-selection-tile-vertical).
     */
    @Input() areOptionTiles: boolean = false;
    /**
     * - Define direction of the option list.
     * - Has effect only if `areOptionTiles = true`.
     */
    @Input() areOptionTilesInline: boolean = false;
    /**
     * - Define if optionTiles height are small (default) or large.
     * - Has effect only if `areOptionTiles = true`.
     */
    @Input() areOptionTilesLarge: boolean = false;
    @Input() errorMessage: string;
    @Input() isRequired: boolean = false;

    @Input() class: string;

    ngOnInit() {
        console.log('InputRadio', this);
    }
}
