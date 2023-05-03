import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */

interface IInput {
    id: string;
    class: string;
    iconPosition: string;
    type: string;
    placeholder: string;
    name: string;
    value: string;
    extraAttribute: string;
}

interface IInputSubmit {
    id: string;
    value: string;
    extraAttribute: string;
}

interface ILabel {
    value: string;
    class: string;
    extraAttribute: string;
}

@Component({
    selector: 'bf-input-search',
    templateUrl: './input-search.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class InputSearchComponent implements OnInit {
    constructor() {}

    @Input() reversed: boolean;
    @Input() class: string;

    /** You could use this attribute, or just add `.is-invalid` class to element `.form-control`. */
    @Input() isDisabled: boolean;

    @Input() label: ILabel;

    @Input() input: IInput;

    @Input() iconColor: string;
    @Input() iconClass: string;

    @Input() inputSubmit: IInputSubmit;

    @Input() mtValue: number = 1;

    @Input() buttonClass: string;
    @Input() invalidMsg: string;

    ngOnInit() {
        console.log('input-search', this);
    }
}
