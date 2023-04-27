import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPrice } from '../../price/angular/api.model';

interface IImage {
    script: string;
    alt: string;
    badgeIconName: string;
}

interface ILink {
    label: string;
    href: string;
    class: string;
}

interface IButton {
    label: string;
    hierarchy: string;
    reverse: boolean;
    href: string;
}

interface IInputIncrement {
    class: string;
    ariaLabel: string;
    inputId: string;
    value: number;
    min: number;
    max: number;
    errorMessage: string;
    isReadOnly: boolean;
    isDisabled: boolean;
}

interface IBadge {
    label: string;
    iconName: string;
}

@Component({
    selector: 'bf-card',
    templateUrl: './card.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class CardComponent implements OnInit {
    constructor() {}

    @Input() image: IImage;
    @Input() iconName: string;
    /** E.g. `#F6F6F6` */
    @Input() visualBackgroundColor: string;
    @Input() comboLabel: string;
    @Input() upperTitle: string;
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
    /**
     * Note: Wrap your data with a semantic HTML tag.
     *
     * E.g. `description_html: "<p>this is a description</p>"`.
     */
    @Input() description_html: HTMLElement;
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
    /**
     * - This badge displays in the card header.
     * - You can pass directly the `label` as a **string** or an **object**.
     * - Based on [Badge](/?path=/docs/components-badge--drupal) component API.
     */
    @Input() badge: any;
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
    @Input() detailsColors: object;
    @Input() detailsStorage: object;
    /**
     * - This badge displays in the phone card content above the price and the promotion badges.
     * - Based on [Badge](/?path=/docs/components-badge--drupal) component API.
     */
    @Input() contentBadges: IBadge[];
    /**
     * - Theses Badges display in the phone card content above the price.
     * - Array of Badges based on [Badge](/?path=/docs/components-badge--drupal) component API.
     * - Will only accept the Badge `Label` and `iconName` properties.
     */
    @Input() promotionBadges: IBadge[];
    /** [Price](/?path=/docs/components-price--drupal) component. */
    @Input() price: IPrice;
    /**
     * Array of [Button](/?path=/docs/components-button--drupal) component
     * or extends with a block: `{% block buttons %} ... {% endblock %}`.
     */
    @Input() buttons: IButton[];
    /** [inputIncrement](/?path=/docs/components-input-increment--drupal) component. */
    @Input() inputIncrement: IInputIncrement;
    /** Note: Can contains html. */
    @Input() note: string;
    @Input() message: string;
    @Input() messageLink: ILink;
    @Input() class: string;
    @Input() isDisabled: boolean;
    @Input() reversed: boolean;
    @Input() language: 'en' | 'fr';

    ngOnInit() {
        console.log('card', this);
    }
}
