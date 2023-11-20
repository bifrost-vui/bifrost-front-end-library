import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-plp',
    templateUrl: './plp.component.html',
})
export class PlpComponent implements OnInit {
    constructor() {}

    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on PLP main element.
     */
    @Input() class: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * PLP main element's `id` attribute.
     */
    @Input() id: string;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * Number of products results.
     *
     * @required
     */
    @Input() numberOfResults: number;

    ngOnInit() {
        console.log('Plp', this);
    }
}
