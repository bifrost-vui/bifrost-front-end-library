import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'child-component',
    templateUrl: './wrapper.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class CardComponent implements OnInit {
    constructor() {}

  @Input() childText = '';
}