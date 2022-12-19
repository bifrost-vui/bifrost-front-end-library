import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-banner-advanced',
    templateUrl: './banner-advanced.component.html',
})
export class BannerAdvancedComponent implements OnInit {
    constructor() {}

    @Input() title: string;
    @Input() description: string;
    /** Expected format: [{name: string, label: string}, {...}]. A maximum of 3 icons is accepted */
    @Input() icons: object[];
    @Input() footer: object | HTMLElement | 'TwigBlock';
    @Input() class: string;
    ngOnInit() {
        console.log('BannerAdvanced', this);
    }
}
