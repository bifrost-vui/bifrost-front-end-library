import { Component, OnInit, Input } from '@angular/core';
import { IIcon } from '../../icon/angular/api.model';

@Component({
    selector: 'bf-good-to-know',
    templateUrl: './good-to-know.component.html',
})
export class GoodToKnowComponent implements OnInit {
    constructor() {}

    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Background color of the component.
     */
    @Input() background: 'ground' | 'underground' | 'highlight' | 'dark' = 'underground';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on the component main element.
     */
    @Input() class: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * It displays after `title`.
     */
    @Input() description: string | HTMLElement;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It displays a large icon on the left side of the banner.
     * - The `icon.size` is always overrided with a custom value `large` : 5.5rem.
     * - You can use the Icon Component [API](/?path=/docs/components-icon--drupal-illustration#illustration-icons).
     */
    @Input() icon: string | IIcon = 'innovation';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom id on the component main element.
     */
    @Input() id: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * It displays before `description`.
     */
    @Input() title: string = 'Good to know';

    ngOnInit() {
        console.log('GoodToKnow', this);
    }
}
