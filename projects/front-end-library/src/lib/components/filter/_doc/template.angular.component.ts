import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-filter',
    templateUrl: './template.angular.component.html',
})
export class FilterTemplateComponent implements OnInit {
    constructor() {}

    @Input() className      : string;

    templates               : number[] = [1,2];

    ngOnInit() {
        console.log('FilterTemplateComponent', this);
    }
}