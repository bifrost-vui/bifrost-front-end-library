import { Component, OnInit, Input } from '@angular/core';
import { IChip } from '../../chip/angular/api.model';

@Component({
    selector: 'bf-chips-group',
    templateUrl: './chips-group.component.html',
})
export class ChipsGroupComponent implements OnInit {
    constructor() {}

    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - This property accepts an array of objects using the `IChip` model.
     * - See `Chip` component [API](/?path=/docs/components-chip--drupal#component-api).
     */
    @Input() chipsData: IChip[];
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on ChipsGroup main element.
     */
    @Input() class: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * ChipsGroup main element's `id` attribute.
     */
    @Input() id: string;

    ngOnInit() {
        console.log('ChipsGroup', this);
    }
}
