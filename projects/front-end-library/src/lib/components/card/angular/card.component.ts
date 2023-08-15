import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPrice } from '../../price/angular/api.model';
import { IImage, ILink, IContentLists, IDetailsColors } from './api.model';
import { IBadge } from '../../badge/angular/api.model';
import { IButton } from '../../button/angular/api.model';
import { IInputIncrement } from '../../input-increment/angular/api.model';

@Component({
    selector: 'bf-card',
    templateUrl: './card.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class CardComponent implements OnInit {
    constructor() {}

    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - This badge displays in the card header.
     * - See Badge Component [API](/?path=/docs/components-badge--drupal).
     */
    @Input() badge: IBadge;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Array of button(s). See Button Component [API](/?path=/docs/components-button--drupal)
     * - Or, extends with a block: `{% block buttons %} ... {% endblock %}`.
     */
    @Input() buttons: IButton[];
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on the card main element.
     */
    @Input() class: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Only available in the __combo__ card.
     * - This is a string of text that displays below the SIM card icon in the image area.
     * - If `comboLabel` is empty, the SIM card icon won't show.
     */
    @Input() comboLabel: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Only available in the __phone__ and __combo__ cards.
     * - This badge displays in these cards content above the price and the promotion badges.
     * - See Badge Component [API](/?path=/docs/components-badge--drupal).
     */
    @Input() contentBadges: IBadge[];
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Available in every card type but `combo`.
     * - This content displays under the card header.
     * - Each object in this array is a content section separated by a line.
     * - See `IContentLists`
     *    <a href="/?path=/docs/components-card-api--page#icontentlists-api" target="_blank">API</a>
     *    and <a href="/?path=/docs/components-card-api--page#icontentlists-format" target="_blank">expected format</a>.
     */
    @Input() contentLists: IContentLists[];
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Note: Wrap your data with a semantic HTML tag.
     *
     * E.g. `description_html: "<p>this is a description</p>"`.
     */
    @Input() description_html: HTMLElement;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Only available in the __phone__ card.
     * - It displays circles of available colors model for phones.
     * - See `IDetailsColors`
     *    <a href="/?path=/docs/components-card-api--page#idetailscolors-api" target="_blank">API</a>
     *    and <a href="/?path=/docs/components-card-api--page#idetailscolors-format" target="_blank">expected format</a>.
     */
    @Input() detailsColors: IDetailsColors[];
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Only available in the __phone__ card.
     * - It displays a list of available storage sizes.
     * - It is an array of strings.
     * - Expected format: `["128 Go", "256 Go"]`
     */
    @Input() detailsStorage: string[];
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Only available in the __protection__, __increment__ and __combo__ cards.
     * - It displays an icon in the image area.
     * - See [Icons - Illustration List](/?path=/story/components-icon--drupal-illustration) for icon names.
     */
    @Input() iconName: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Only available in the __phone__ and __combo__ cards.
     * - It displays an image in the image area of the card.
     * - If `badgeIconName` is provided with an Icon name, it will show up in the bottom right corner of the image area.
     * - See `IImage`
     *    <a href="/?path=/docs/components-card-api--page#iimage-api" target="_blank">API</a>
     *    and <a href="/?path=/docs/components-card-api--page#iimage-format" target="_blank">expected format</a>.
     */
    @Input() image: IImage;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Only available in the __increment__ card.
     * - See Input Increment Component [API](/?path=/docs/components-input-increment--drupal).
     */
    @Input() inputIncrement: IInputIncrement;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * If `true`, the card will be disabled.
     */
    @Input() isDisabled: boolean;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It is displayed below the subtitle.
     * - See `ILink`
     *    <a href="/?path=/docs/components-card-api--page#ilink-api" target="_blank">API</a>
     *    and <a href="/?path=/docs/components-card-api--page#ilink-format" target="_blank">expected format</a>.
     */
    @Input() link: ILink;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * It is displayed in the card footer, completely at the end.
     */
    @Input() message: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It is displayed just after a `message`.
     * - See `ILink`
     *    <a href="/?path=/docs/components-card-api--page#ilink-api" target="_blank">API</a>
     *    and <a href="/?path=/docs/components-card-api--page#ilink-format" target="_blank">expected format</a>.
     */
    @Input() messageLink: ILink;
    /** Note: Can contains html. */
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It is displayed between the `price` and `buttons` components.
     * - Can be a simple string of text or it can contains html.
     */
    @Input() note: string | HTMLElement;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It displays the `price` component in the footer.
     * - See Price Component [API](/?path=/docs/components-price--drupal).
     */
    @Input() price: IPrice;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It displays badges between `contentLists` and `price`.
     * - Will only accept the Badge `label` and `iconName` properties.
     * - See Badge Component [API](/?path=/docs/components-badge--drupal).
     */
    @Input() promotionBadges: IBadge[];
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * It is displayed in the header area below the card's title.
     */
    @Input() subtitle: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It is displayed in the header area between the `upperTitle` and `subtitle`.
     * - See `ITitle`
     *    <a href="/?path=/docs/components-card-api--page#ititle-api" target="_blank">API</a>
     *    and <a href="/?path=/docs/components-card-api--page#ititle-format" target="_blank">expected format</a>.
     */
    @Input() title: any;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Title's HTML tag.
     */
    @Input() titleTag: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - __Not__ available in the __increment__ card.
     * - It is displayed in the header area above the card's title.
     */
    @Input() upperTitle: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Only available in the __phone__, __protection__ and __combo__ cards.
     * - The string needs to be a color name or an hexadecimal color code (ex.: #F6F6F6).
     * - It changes the color of the normally grey background behind the image or icon.
     * - In Storybook, there is an issue with the `#` character, so it breaks the rendering of the component.
          To test this props, use a color name like `red`, `blue`, `yellow`, `black`, etc.
     */
    @Input() visualBackgroundColor: string;

    /**
     * __\*Deprecated\*__
     *
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Use `price.language` instead
     * - If `price.language` is not provided, it will use this prop instead.
     */
    @Input() language: 'en' | 'fr' = 'en';

    ngOnInit() {
        console.log('card', this);
    }
}
