import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-filters',
    templateUrl: './template.angular.component.html',
})
export class FiltersTemplateComponent implements OnInit {
    constructor() {}

    @Input() className      : string;

    templates               : number[] = [1,2];

    ngOnInit() {
        console.log('FiltersTemplateComponent', this);
    }
}