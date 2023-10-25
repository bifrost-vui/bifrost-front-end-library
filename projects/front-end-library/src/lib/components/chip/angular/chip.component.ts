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
     * String that contains a JavaScript function or code to execute when the button is clicked.
     */
    @Input() deleteButton: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Chip item's main element's `id` attribute.
     */
    @Input() id: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Is the Chip item disabled?
     */
    @Input() isDisabled: boolean = false;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Is the Chip item text all uppercase?
     */
    @Input() isUppercase: boolean = true;
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
    @Input() size: 'small' | 'medium' = 'medium';

    ngOnInit() {
        console.log('Chip', this);
    }
}
