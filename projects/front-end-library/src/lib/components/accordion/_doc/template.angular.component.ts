import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-accordion',
    templateUrl: './template.angular.component.html',
})
export class AccordionTemplateComponent implements OnInit {
    constructor() {}

    @Input() className      : string;

    templates               : number[] = [1,2];

    ngOnInit() {
        console.log('AccordionTemplateComponent', this);
    }
}