import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bf-progress',
  templateUrl: './progress.component.html',
  // styleUrls: ['../scss/index.scss'],
})
export class ProgressComponent implements OnInit {
    constructor() {}

    @Input() progressPercentValue   : number;
    @Input() progressValue          : number;
    @Input() progressColor          : 'default'|'success'|'warning'|'danger';
    @Input() progressBarClass       : string;
    @Input() class                  : string;

    ngOnInit() {
        console.log('Progress', this);
    }
}