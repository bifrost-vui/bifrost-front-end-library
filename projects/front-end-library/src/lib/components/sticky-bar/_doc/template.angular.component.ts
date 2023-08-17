import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-sticky-bar',
    templateUrl: './template.angular.component.html',
})
export class StickyBarTemplateComponent implements OnInit {
    constructor() {}

    @Input() className      : string;

    templates               : number[] = [1,2];

    ngOnInit() {
        console.log('StickyBarTemplateComponent', this);
    }
}