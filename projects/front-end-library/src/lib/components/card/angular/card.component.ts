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
    @Input() description            : string;
    @Input() link                   : object;
    @Input() badge                  : string;

    @Input() contentLists           : object;
    @Input() detailsColors          : object;
    @Input() detailsStorage        : object;

    @Input() price                  : object;
    @Input() note                   : string;
    @Input() buttons                : object;
    @Input() message                : string;
    
    @Input() class                  : string;
    @Input() disabled               : boolean;

    ngOnInit() {
        console.log('card', this);
    }
}
