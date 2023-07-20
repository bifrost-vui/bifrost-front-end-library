import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-channels',
    templateUrl: './template.angular.component.html',
})
export class ChannelsTemplateComponent implements OnInit {
    constructor() {}

    @Input() className      : string;

    templates               : number[] = [1,2];

    ngOnInit() {
        console.log('ChannelsTemplateComponent', this);
    }
}