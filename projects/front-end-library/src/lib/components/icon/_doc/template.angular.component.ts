import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'bf-template-icon',
    templateUrl: './template.angular.component.html',
})
export class IconTemplateComponent implements OnInit {
    constructor() {}

    @Input() reversed     : string;
    @Input() icons        : string[];

    ngOnInit() {
        console.log('IconTemplateComponent', this);
    }
}