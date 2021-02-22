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

    @Input() type               : string;
    @Input() name               : string;
    @Input() size               : string;
    @Input() color              : string;
    @Input() class              : string;
    @Input() reversed           : boolean;

    ngOnInit() {
        console.log('icon', this);
    }
}
