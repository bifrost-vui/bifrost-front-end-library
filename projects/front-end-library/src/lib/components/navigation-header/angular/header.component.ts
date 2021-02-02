import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */
 
@Component({
    selector: 'bf-header',
    templateUrl: './header.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class HeaderComponent implements OnInit {
    constructor() {}

    @Input() reversed               : boolean;

    @Input() logoName               : string;

    @Input() navItems               : any[];

    /** Note: Only visible on desktop. */
    @Input() hasTopBar              : boolean;
    @Input() topBarItems            : any[];
    @Input() topBarSecondaryItems   : any[];

    @Input() hasMiniCartBtn         : boolean;
    @Input() hasNoSearchBtn         : boolean;

    ngOnInit() {
        console.log('Header', this);
    }
    
}
