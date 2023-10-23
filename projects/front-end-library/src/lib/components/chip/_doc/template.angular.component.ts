import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-chip',
    templateUrl: './template.angular.component.html',
})
export class ChipTemplateComponent implements OnInit {
    constructor() {}

    @Input() className      : string;

    templates               : number[] = [1,2];

    ngOnInit() {
        console.log('ChipTemplateComponent', this);
    }
}