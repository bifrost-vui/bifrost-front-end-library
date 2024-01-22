import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-tooltip',
    templateUrl: './template.angular.component.html',
})
export class TooltipTemplateComponent implements OnInit {
    constructor() {}

    @Input() className      : string;

    templates               : number[] = [1,2];

    ngOnInit() {
        console.log('TooltipTemplateComponent', this);
    }
}