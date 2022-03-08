import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'bf-banner-advanced',
    templateUrl: './banner-advanced.component.html',
})
export class BannerAdvancedComponent implements OnInit {
    constructor() {}

    @Input() title      : string;
    @Input() subtitle   : string;
    /** Expected format: [{name: string, label: string}, {...}] - a maximum of 3 icons is accepted*/
    @Input() icons   : object[];

    @Input() class  : string;

    ngOnInit() {
        console.log('BannerAdvanced', this);
    }
}
