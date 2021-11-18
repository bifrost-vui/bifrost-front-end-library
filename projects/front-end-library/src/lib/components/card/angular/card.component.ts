import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";
import { IPrice } from '../../price/angular/price.component';


interface IImage {
    script          : string;
    alt             : string;
    badgeIconName   : string;
}

interface ILink {
    label           : string;
    href            : string;
    class           : string;
}

interface IButton {
    label           : string;
    hierarchy       : string;
    reverse         : boolean;
    href            : string;
}

interface IInputIncrement {
    class        : string;
    ariaLabel    : string;
    inputId      : string;
    value        : number;
    min          : number;
    max          : number;
    errorMessage : string;
    isReadOnly   : boolean;
    isDisabled   : boolean;
}

@Component({
    selector: 'bf-card',
    templateUrl: './card.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class CardComponent implements OnInit {
    constructor() {}

    @Input() image                  : IImage;
    @Input() iconName               : string;
    /** E.g. `#F6F6F6` */
    @Input() visualBackgroundColor  : string;
    @Input() comboLabel             : string;
    @Input() upperTitle             : string;
    @Input() subtitle               : string;
    @Input() title                  : string;
    @Input() titleTag               : string;
    /**
    Note: Wrap your data with a semantic HTML tag.
    E.g. `description_html: "<p>this is a description</p>"`
    */
    @Input() description_html       : string;
    /** Expected format:
    ```
        {
            label           : "Learn more",
            href            : "www.videotron.com",
        }
    ```
    */
    @Input() link                   : ILink;

    /**
        This badge displays in the card Header :
        You can pass directly the `label` as a **string** or an **object**. Based on [Badge](/?path=/docs/components-badge--drupal) component API.
    */
    @Input() badge                  : any;

    /** Array of object. Expected format:
    <pre style='font-size: .75rem; padding: 0 1rem; marigin:0'>
    [
        {
          title       : 'TV',
          description : '40 channels',
          content     : [
            {
              label   : 'Unlimited Go after 10Go',
              icon    : 'unlimited',
            },
          ],
        }
        ...
    ]
    </pre>*/
    @Input() contentLists           : object;
    @Input() detailsColors          : object;
    @Input() detailsStorage         : object;

    /** This badge displays in the phone card content above the price. Based on [Badge](/?path=/docs/components-badge--drupal) component API
    */
    @Input() contentBadge           : object;
    /**
        [Price](/?path=/docs/components-price--drupal) component.
    */
    @Input() price                  : IPrice;
    /**
        Note: Can contains html.
    */
    @Input() note                   : string;
    /**
        Array of [Button](/?path=/docs/components-button--drupal) component.
        Or extends with a block: {% block buttons %} ... {% endblock %}.
    */
    @Input() buttons                : IButton[];
    /**
      [inputIncrement](/?path=/docs/components-input-increment--drupal) component.
     */
    @Input() inputIncrement         : IInputIncrement;
    @Input() message                : string;
    @Input() messageLink            : ILink;
    @Input() class                  : string;
    @Input() isDisabled             : boolean;
    @Input() reversed               : boolean;
    @Input() language               : 'en' | 'fr';

    ngOnInit() {
        console.log('card', this);
    }
}
