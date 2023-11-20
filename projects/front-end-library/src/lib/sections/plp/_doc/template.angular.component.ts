import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-plp',
    templateUrl: './template.angular.component.html',
})
export class PlpTemplateComponent implements OnInit {
    constructor() {}

    @Input() className      : string;

    templates               : number[] = [1,2];

    ngOnInit() {
        console.log('PlpTemplateComponent', this);
    }
}