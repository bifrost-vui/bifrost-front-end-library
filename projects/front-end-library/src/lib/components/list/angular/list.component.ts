import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

/**
 * Description of the component List
 *
 */

@Component({
    selector: 'bf-list',
    templateUrl: './list.component.html',
    // styleUrls: ['../scss/index.scss'],
})
export class ListComponent implements OnInit {
    constructor() {}

    @Input() title: string;
    @Input() titleTag: string;
    /** Array of object. Expected format:
     * <pre>
     *     <code>
     *         [
     *             {
     *                 "label": `string`,
     *                 "iconName": `string`
     *             },
     *             {...},
     *         ]
     *     </code>
     * </pre>
     */
    @Input() content: object[];

    @Input() reversed: boolean;
    @Input() class: string;

    ngOnInit() {
        console.log('List', this);
    }
}
