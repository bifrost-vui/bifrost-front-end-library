import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */
 
@Component({
    selector: "bf-breadcrumb",
    templateUrl: './breadcrumb.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class BreadcrumbComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        console.log('breadcrumb', this);
    }
    
}
