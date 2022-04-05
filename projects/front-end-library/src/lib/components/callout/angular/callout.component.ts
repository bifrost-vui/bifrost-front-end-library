import { Component, OnInit, Input } from '@angular/core';

interface IButton {
    label: string;
    hierarchy: string;
    href: string;
    iconName: string;
    iconPosition: string;
}

@Component({
    selector: 'bf-callout',
    templateUrl: './callout.component.html',
})
export class CalloutComponent implements OnInit {
    constructor() {}


    @Input() title: string;
    @Input() description: string;
    @Input() feedback: 'neutral'|'success'|'warning'|'negative';
    @Input() content: string | 'TwigBlock';
    @Input() hasCloseButton: boolean;
    @Input() class: string;

    ngOnInit() {
        console.log('Callout', this);
    }
}