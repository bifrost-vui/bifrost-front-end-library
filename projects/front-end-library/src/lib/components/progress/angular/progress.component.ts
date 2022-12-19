import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-progress',
    templateUrl: './progress.component.html',
    // styleUrls: ['../scss/index.scss'],
})
export class ProgressComponent implements OnInit {
    constructor() {}

    @Input() progressValue: number;
    @Input() progressPercentValue: number;
    @Input() progressMaxValue: number;
    @Input() progressMinValue: number;
    @Input() progressBarClass: string;
    @Input() isMonochromeColor: boolean;
    @Input() class: string;

    ngOnInit() {
        console.log('Progress', this);
    }
}
