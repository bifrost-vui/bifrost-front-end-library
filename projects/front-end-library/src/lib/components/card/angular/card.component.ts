import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */
 
@Component({
    selector: 'bf-card',
    templateUrl: './card.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class CardComponent implements OnInit {
    constructor() {}

    @Input() image                  : object;
    @Input() iconName               : string;

    @Input() upperTitle             : string;
    @Input() title                  : string;

    /** E.g. `h4` */
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
    @Input() link                   : object;

    /**
        You can pass directly the **label** in string format or an object based on [Badge](/?path=/docs/components-badge--drupal) component API.
    */
    @Input() badge                  : any;

    /** Array of object. Expected format:
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
    */
    @Input() buttons                : object;
    @Input() message                : string;
    
    @Input() class                  : string;
    @Input() isDisabled             : boolean;
    @Input() reversed               : boolean;

    ngOnInit() {
        console.log('card', this);
    }
}
