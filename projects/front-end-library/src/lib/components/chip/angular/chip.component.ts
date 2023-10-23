import { Component, OnInit, Input } from '@angular/core';
import { IChipDeleteButton } from './api.model';

@Component({
    selector: 'bf-chip',
    templateUrl: './chip.component.html',
})
export class ChipComponent implements OnInit {
    constructor() {}

    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Background color of the Chip element.
     */
    @Input() background: 'ground' | 'underground' = 'underground';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on Chip main element.
     */
    @Input() class: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Array of objects containing one object per event type.
     * - Each object contains a JavaScript function or code to execute when the related event is triggered.
     * - See `IChipDeleteButton`
     *    <a href="/?path=/docs/components-chip-api--page#ichipdeletebutton-api" target="_blank">API</a>
     *    and <a href="/?path=/docs/components-chip-api--page#ichipdeletebutton-format" target="_blank">expected format</a>.
     */
    @Input() deleteButton: IChipDeleteButton[];
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Chip main element's `id` attribute.
     */
    @Input() id: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Is the Chip element disabled?
     */
    @Input() isDisabled: boolean;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * The inner text.
     *
     * @required
     */
    @Input() label: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Chip size.
     */
    @Input() size: 'small' | 'medium' | 'large' = 'large';

    ngOnInit() {
        console.log('Chip', this);
    }
}
