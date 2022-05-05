import { Component, OnInit, Input } from '@angular/core';
import {HTMLElement} from '@webcomponents/custom-elements/src/Patch/Native';
import { ISwitch } from '../../input-switch/angular/api.model';


@Component({
    selector: 'bf-banner-advanced',
    templateUrl: './banner-advanced.component.html',
})
export class BannerAdvancedComponent implements OnInit {
    constructor() {}

    @Input() title      : string;
    @Input() description: string;
    /** Expected format: [{name: string, label: string}, {...}]. A maximum of 3 icons is accepted */
    @Input() icons: object[];
    @Input() footer: HTMLElement | 'TwigBlock';
    /** See [Input Switch](/?path=/story/components-input-switch--drupal) */
    @Input() inputSwitch: ISwitch;
    @Input() class: string;
    ngOnInit() {
        console.log('BannerAdvanced', this);
    }
}