import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */
 
@Component({
    selector: "bf-tag",
    templateUrl: './tag.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class TagComponent implements OnInit {
    constructor() {}
    @Input() label      : string;
    @Input() reversed   : boolean;

    ngOnInit() {
        console.log('tag', this);
    }
    
}
