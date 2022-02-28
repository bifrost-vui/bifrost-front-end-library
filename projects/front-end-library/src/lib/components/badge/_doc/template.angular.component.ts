import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'bf-template-badge',
    templateUrl: './template.angular.component.html',
})
export class BadgeTemplateComponent implements OnInit {
    constructor() {}

    @Input() className      : string;

    templates               : number[] = [1,2];

    ngOnInit() {
        console.log('BadgeTemplateComponent', this);
    }
}