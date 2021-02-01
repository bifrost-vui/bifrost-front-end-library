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

    @Input() reversed: boolean;

    @Input() logoName: string;

    @Input() navItems: any[];
    
    @Input() hasTopBar: boolean;
    @Input() topBarItems: any[];
    @Input() topBarSecondaryItems: any[];

    ngOnInit() {
        console.log('Header', this);
    }
    
}
