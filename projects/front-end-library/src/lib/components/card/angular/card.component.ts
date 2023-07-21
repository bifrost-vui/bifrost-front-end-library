import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPrice } from '../../price/angular/api.model';
import { IImage, ILink, IBadge, IButton, IInputIncrement } from './api.model';

@Component({
    selector: 'bf-card',
    templateUrl: './card.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class CardComponent implements OnInit {
    constructor() {}

    /**
     * - This badge displays in the card header.
     * - You can pass directly the `label` as a **string** or an **object**.
     * - Based on [Badge](/?path=/docs/components-badge--drupal) component API.
     */
    @Input() badge: any;
    /**
     * Array of [Button](/?path=/docs/components-button--drupal) component
     * or extends with a block: `{% block buttons %} ... {% endblock %}`.
     */
    @Input() buttons: IButton[];
    @Input() class: string;
    @Input() comboLabel: string;
    /**
     * - This badge displays in the phone card content above the price and the promotion badges.
     * - Based on [Badge](/?path=/docs/components-badge--drupal) component API.
     */
    @Input() contentBadges: IBadge[];
    /** Array of object. Expected format:
     * <pre>
     *     <code>
     *         [
     *             {
     *                 "title": `string`,
     *                 "description": `string`,
     *                 "content": [
     *                     {
     *                         "label": `string`,
     *                         "icon": `string`
     *                     },
     *                     {...},
     *                 ]
     *             },
     *             {...},
     *         ]
     *     </code>
     * </pre>
     */
    @Input() contentLists: object[];
    /**
     * Note: Wrap your data with a semantic HTML tag.
     *
     * E.g. `description_html: "<p>this is a description</p>"`.
     */
    @Input() description_html: HTMLElement;
    @Input() detailsColors: object;
    @Input() detailsStorage: object;
    @Input() iconName: string;
    @Input() image: IImage;
    /** [inputIncrement](/?path=/docs/components-input-increment--drupal) component. */
    @Input() inputIncrement: IInputIncrement;
    @Input() isDisabled: boolean;
    @Input() language: 'en' | 'fr';
    /** Expected format:
     * <pre>
     *     <code>
     *         {
     *             "label": `string`,
     *             "href": `string`
     *         }
     *     </code>
     * </pre>
     */
    @Input() link: ILink;
    @Input() message: string;
    @Input() messageLink: ILink;
    /** Note: Can contains html. */
    @Input() note: string;
    /** [Price](/?path=/docs/components-price--drupal) component. */
    @Input() price: IPrice;
    /**
     * - Theses Badges display in the phone card content above the price.
     * - Array of Badges based on [Badge](/?path=/docs/components-badge--drupal) component API.
     * - Will only accept the Badge `Label` and `iconName` properties.
     */
    @Input() promotionBadges: IBadge[];
    @Input() subtitle: string;
    /**
     * Can be a simple **string** or an **object**
     * <pre>
     *     <code>
     *         {
     *             category: "Category Title",
     *             detail: "Some descriptive title",
     *         }
     *     </code>
     * </pre>
     */
    @Input() title: any;
    @Input() titleTag: string;
    @Input() upperTitle: string;
    /** E.g. `#F6F6F6` */
    @Input() visualBackgroundColor: string;

    ngOnInit() {
        console.log('card', this);
    }
}
