import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-chip',
    templateUrl: './chip.component.html',
})
export class ChipComponent implements OnInit {
    constructor() {}

    /* In alphabetical order (remove this comment) */

    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on Chip main element.
     */
    @Input() class: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Chip main element's `id` attribute.
     */
    @Input() id: string;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * The inner text.
     *
     * @required
     */
    @Input() label: string;

    ngOnInit() {
        console.log('Chip', this);
    }
}
