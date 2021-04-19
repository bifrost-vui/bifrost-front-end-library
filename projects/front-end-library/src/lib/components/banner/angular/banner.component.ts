import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */
 
@Component({
    selector: 'bf-banner',
    templateUrl: './banner.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class BannerComponent implements OnInit {
    constructor() {}

    @Input() reversed           : boolean;
    @Input() class              : string;
    
    @Input() href               : string;
    @Input() title              : string;
    @Input() paragraph          : string;
    @Input() image              : object;
    @Input() iconName           : string;
    @Input() badge              : any;

    ngOnInit() {
        console.log('banner', this);
    }
    
}
