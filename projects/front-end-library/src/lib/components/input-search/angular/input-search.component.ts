import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IButtonSubmit, IInput, ILabel } from './api.model';

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */

@Component({
    selector: 'bf-input-search',
    templateUrl: './input-search.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class InputSearchComponent implements OnInit {
    constructor() {}

    // TODO: It seems there is some control here that is not used anymore, like "iconClass". A checkup will be necessary.

    /** Expected format:
     * <pre>
     *     <code>
     *         {
     *             "buttonIcon": `IButtonIcon`,
     *             "isVisible": `boolean`,
     *             "position": `"left" | "right"`,
     *         }
     *     </code>
     * </pre>
     * <p>Check [IButtonIcon](?path=/docs/components-button-icon--drupal#component-api) component API for more details.</p>
     */
    @Input() buttonSubmit: IButtonSubmit;
    @Input() class: string;
    /** Activate a button to clear search input. */
    @Input() hasButtonClear: boolean;
    /** Expected format:
     * <pre>
     *     <code>
     *         {
     *             "class": `string`,
     *             "extraAttribute": `string`,
     *             "id": `string`,
     *             "name": `string`,
     *             "placeholder": `string`,
     *             "value": `string`,
     *         }
     *     </code>
     * </pre>
     */
    @Input() input: IInput;
    @Input() isDisabled: boolean;
    /** Expected format:
     * <pre>
     *     <code>
     *         {
     *             "class": `string`,
     *             "extraAttribute": `string`,
     *             "text": `string`,
     *         }
     *     </code>
     * </pre>
     */
    @Input() label: ILabel;
    @Input() reversed: boolean;

    ngOnInit() {
        console.log('input-search', this);
    }
}
