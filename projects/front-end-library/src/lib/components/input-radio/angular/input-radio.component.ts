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
    @Input() options: IInputRadioOption[] | ISelectionTile[];
    /** Transform options as tiles. Then use options from [Selection Tile API](?path=/story/components-selection-tile--drupal-selection-tile-vertical). */
    @Input() isOptionTiles: boolean;
    /** Define orientation of the Component Selection Tile and the direction of the option list. Has effect only if `isOptionTiles = true`. */
    @Input() optionTilesOrientation: 'horizontal' | 'horizontal-inline' | 'vertical-inline';
    @Input() errorMessage: string;
    @Input() isRequired: boolean;

    @Input() class: string;

    ngOnInit() {
        console.log('InputRadio', this);
    }
}