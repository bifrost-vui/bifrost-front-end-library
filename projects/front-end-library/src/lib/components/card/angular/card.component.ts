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

    @Input() labelBtn: string;
    @Input() isImage: boolean;
    @Input() isTag: boolean;
    @Input() phoneSelected          : string;
    @Input() cardStatus             : string;
    @Input() cardType               : string;
    @Input() class                  : string;
    @Input() variant                : string;

    @Input() label_value             : string = 'Label';
    @Input() label_class             : string;
    @Input() label_extraAttribute    : string;

    @Input() buttonClass            : string;

    ngOnInit() {
        console.log('card', this);
    }
    
}
