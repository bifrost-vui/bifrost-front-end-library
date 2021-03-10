import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */
 
@Component({
    selector: "bf-badge",
    templateUrl: './badge.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class BadgeComponent implements OnInit {
    constructor() {}
    
    @Input() label      : string;
    @Input() color      : string;
    @Input() reversed   : boolean;

    ngOnInit() {
        console.log('badge', this);
    }
    
}
