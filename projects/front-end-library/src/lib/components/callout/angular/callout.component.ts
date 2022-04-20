import { Component, OnInit, Input } from '@angular/core';
import { IButton } from '../../button/angular/api.model';

@Component({
    selector: 'bf-callout',
    templateUrl: './callout.component.html',
})
export class CalloutComponent implements OnInit {
    constructor() {}

    @Input() feedback: 'neutral' | 'success' | 'warning' | 'negative';
    /** Set to false to remove close button */
    @Input() hasCloseButton: boolean;
    @Input() title: string;
    @Input() description: string;
    /** See [Component Button](/?path=/story/components-button--drupal) */
    @Input() button: IButton;
    /** HTML which display under the title and description. */
    @Input() content: string | 'TwigBlock';

    @Input() class: string;

    ngOnInit() {
        console.log('Callout', this);
    }
}