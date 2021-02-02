import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */
 
@Component({
    selector: 'bf-icon',
    templateUrl: './icon.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class IconComponent implements OnInit {
    constructor() {}

    @Input() reversed           : boolean;
    @Input() class              : string;
    @Input() name               : string;
    @Input() color              : string;

    ngOnInit() {
        console.log('icon', this);
    }
    
}
