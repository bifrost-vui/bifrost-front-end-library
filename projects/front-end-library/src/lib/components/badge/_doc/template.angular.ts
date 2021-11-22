import { Component, OnInit, Input } from "@angular/core";


@Component({
    selector: "bf-template-badge",
    templateUrl: './template.angular.html',
})
export class BadgeTemplate implements OnInit {
    constructor() {}

    @Input() templates: number[] = [1,2];

    ngOnInit() {
        console.log('BadgeTemplate', this);
    }
}