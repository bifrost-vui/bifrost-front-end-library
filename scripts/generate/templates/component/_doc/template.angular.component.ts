import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-%component-name%',
    templateUrl: './template.angular.component.html',
})
export class %ComponentName%TemplateComponent implements OnInit {
    constructor() {}

    @Input() className      : string;

    templates               : number[] = [1,2];

    ngOnInit() {
        console.log('%ComponentName%TemplateComponent', this);
    }
}