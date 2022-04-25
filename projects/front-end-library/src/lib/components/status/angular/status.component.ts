import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bf-status',
  templateUrl: './status.component.html',
  // styleUrls: ['../scss/index.scss'],
})
export class StatusComponent implements OnInit {
    constructor() {}

    @Input() label : string;
    @Input() color : string;
    @Input() class : string;

    ngOnInit() {
        console.log('status', this);
    }
}