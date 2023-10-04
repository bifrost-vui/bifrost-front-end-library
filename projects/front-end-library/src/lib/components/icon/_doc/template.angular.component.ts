import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-template-icon',
    templateUrl: './template.angular.component.html',
})
export class IconTemplateComponent implements OnInit {
    constructor() {}

    @Input() className: string;
    @Input() color: string;
    @Input() icons: string[];
    @Input() name: string;
    @Input() size: string;

    ngOnInit() {
        console.log('IconTemplateComponent', this);
    }
}
