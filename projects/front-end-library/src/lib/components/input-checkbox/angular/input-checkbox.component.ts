import { Component, OnInit, Input } from '@angular/core';
import { IInputCheckboxOption } from '../../input-checkbox-option/angular/api.model';
import { ISelectionTile } from '../../selection-tile/angular/api.model';

@Component({
    selector: 'bf-input-checkbox',
    templateUrl: './input-checkbox.component.html',
})
export class InputCheckboxComponent implements OnInit {
    constructor() {}

    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Transform options as tiles (Selection Tile component).
     */
    @Input() areOptionTiles: boolean = false;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Define direction of the option list.
     * - Has effect only if `areOptionTiles = true`.
     */
    @Input() areOptionTilesInline: boolean = false;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Define if optionTiles height are small (default) or large.
     * - Has effect only if `areOptionTiles = true`.
     */
    @Input() areOptionTilesLarge: boolean = false;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on component main element.
     */
    @Input() class: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Text below component `label`.
     */
    @Input() description: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Red error message below all checkboxes.
     * - Only visible when content the property is not empty.
     */
    @Input() errorMessage: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Extra attributes on the component element.
     * - Can be a simple **string** or an **object**
     *
     * <br>
     * _**String**_
     *
     * Must be between double-quotes ("), so use single-quotes (') for attributes.
     * <pre>
     *    <code>
     *        "style='display: flex;'"
     *    </code>
     * </pre>
     * <br><br>
     * _**Object**_
     * <pre>
     *    <code>
     *        {
     *            "data-test-1": "test-1",
     *            "data-test-2": "test-2"
     *        }
     *    </code>
     * </pre>
     */
    @Input() extraAttribute: string | object;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Component `id` attribute.
     */
    @Input() id: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Component label / main title.
     */
    @Input() label: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * This value will be put in each checkboxes `name` HTML attribute.
     */
    @Input() name: string;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * - If `areOptionTiles` is `true`, then you have to use [Selection Tile API](/?path=/docs/components-selection-tile--drupal#component-api).
     * - If not, then you have to use [Input Checkbox Option API](/?path=/docs/components-input-checkbox-input-checkbox-option--drupal).
     *
     * @required
     */
    @Input() options: IInputCheckboxOption[] | ISelectionTile[];

    ngOnInit() {
        console.log('InputCheckbox', this);
    }
}
