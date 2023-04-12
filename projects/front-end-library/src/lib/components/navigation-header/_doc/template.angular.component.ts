import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-template-header',
    templateUrl: './template.angular.component.html',
})
export class HeaderTemplateComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        console.log('HeaderTemplateComponent', this);
    }
}
