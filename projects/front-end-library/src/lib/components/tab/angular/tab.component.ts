import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */
 
@Component({
    selector: 'bf-tab',
    templateUrl: './tab.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class TabComponent implements OnInit {
    constructor() {}

    @Input() navItems             : object;
    @Input() itemClass            : string;

    ngOnInit() {
        console.log('Tab', this);
    }
}
