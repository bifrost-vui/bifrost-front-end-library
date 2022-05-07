import { Component, OnInit, Input } from '@angular/core';
import { IInputRadioOption } from '../../input-radio-option/angular/api.model';
import { ISelectionTile } from '../../selection-tile/angular/api.model';

@Component({
    selector: 'bf-input-radio',
    templateUrl: './input-radio.component.html',
})
export class InputRadioComponent implements OnInit {
    constructor() {}

    /**  */
    @Input() name: string;
    @Input() options: IInputRadioOption[] | ISelectionTile[];
    /** Transform options as tiles. Use [Selection Tile API](?path=/story/components-selection-tile--drupal-selection-tile-vertical). */
    @Input() isOptionTiles: boolean;
    @Input() label: string;
    @Input() description: string;
    @Input() errorMessage: string;
    @Input() isRequired: boolean;

    @Input() class: string;

    ngOnInit() {
        console.log('InputRadio', this);
    }
}