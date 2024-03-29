import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

interface IProgressData {
    label: string;
    cssClass: string;
    percent: number;
    currentValue: number;
    minValue: number;
    maxValue: number;
}

@Component({
    selector: 'bf-progress-multi',
    templateUrl: './progress-multi.component.html',
    // styleUrls: ['../scss/index.scss'],
})
export class ProgressMultiComponent implements OnInit {
    constructor() {}

    /** Array of object. Expected format:
     * <pre>
     *     <code>
     *         [
     *             {
     *                 "label": `string`,
     *                 "cssClass": `string`,
     *                 "percent": `number`,
     *                 "currentValue": `number`,
     *                 "minValue": `number`,
     *                 "maxValue": `number`
     *             },
     *             {...},
     *         ]
     *     </code>
     * </pre>
     */
    @Input() progressDatas: IProgressData[];
    @Input() progressClass: string;
    @Input() legendClass: string;
    @Input() class: string;

    ngOnInit() {
        console.log('ProgressMulti', this);
    }
}
