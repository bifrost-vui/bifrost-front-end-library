import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-chips-group',
    templateUrl: './template.angular.component.html',
})
export class ChipsGroupTemplateComponent implements OnInit {
    constructor() {}

    @Input() className      : string;

    templates               : number[] = [1,2];

    ngOnInit() {
        console.log('ChipsGroupTemplateComponent', this);
    }
}