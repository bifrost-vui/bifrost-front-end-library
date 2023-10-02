import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-good-to-know',
    templateUrl: './template.angular.component.html',
})
export class GoodToKnowTemplateComponent implements OnInit {
    constructor() {}

    @Input() className      : string;

    templates               : number[] = [1,2];

    ngOnInit() {
        console.log('GoodToKnowTemplateComponent', this);
    }
}