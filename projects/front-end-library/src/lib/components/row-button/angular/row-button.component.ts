import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */

@Component({
    selector: 'bf-row-button',
    templateUrl: './row-button.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class RowButtonComponent implements OnInit {
    constructor() {}

    @Input() href: string;
    @Input() title: string;
    @Input() titleTag: string;
    @Input() paragraph: string;
    @Input() linkLabel: string;

    @Input() image: object;
    @Input() iconName: string;
    @Input() hasChevron: boolean;
    @Input() size: 'small' | 'medium' | 'large';

    @Input() dataDismiss: string;
    @Input() dataToggle: string;
    @Input() dataTarget: string;
    @Input() ariaControls: string;
    @Input() ariaLabel: string;
    /**
     Can be a simple **string** or an **object**

     _**String**_

     Must be between double-quotes ("), so use single-quotes (') for attributes.
     <pre style='font-size: 0.75rem; padding: 0.5rem; margin: 0.5rem 0; border: 1px solid currentColor'>
        "id='lorem_ipsum' style='display: flex;'"
     </pre>

     _**Object**_
     <pre style='font-size: 0.75rem; padding: 0.5rem; margin: 0.5rem 0; border: 1px solid currentColor'>
        {
            "data-test-1": "test-1",
            "data-test-2": "test-2"
        }
     </pre>
     */
    @Input() extraAttribute: string | object;

    @Input() class: string;
    @Input() reversed: boolean;

    ngOnInit() {
        console.log('row-button', this);
    }
}
