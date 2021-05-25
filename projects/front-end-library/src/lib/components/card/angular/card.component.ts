import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

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
    
    @Input() upperTitle             : string;
    @Input() title                  : string;
    @Input() titleTag               : string;
    @Input() description            : string;
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
        You can pass directly the **label** as a **string** or an **object** based on [Badge](/?path=/docs/components-badge--drupal) component API.
    */
    @Input() badge                  : any;

    /*
        Array of object. Expected format:
        ```
        [
            {
                title       : "TV",
                description : "40 channels",
                content     : [
                    {
                        label   : "Free and Unlimited Go after 10Go",
                        icon    : "unlimited",
                    },
                    ...
                ],
            }
        ]
        ```
    */
    @Input() contentLists           : object;
    @Input() detailsColors          : object;
    @Input() detailsStorage         : object;

    /**
        [Price](/?path=/docs/components-price--drupal) component.
    */
    @Input() price                  : object;
    @Input() note                   : string;

    /**
        Array of [Button](/?path=/docs/components-button--drupal) component.
        Or extends with a block: {% block buttons %} ... {% endblock %}.
    */
    @Input() buttons                : IButton[];
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
