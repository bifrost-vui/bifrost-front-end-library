import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */
 
@Component({
    selector: "bf-button",
    templateUrl: './button.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class ButtonComponent implements OnInit {
    constructor() {}

    @Input() label          : string;
    @Input() hierarchy      : string;
    @Input() isDisabled     : boolean;
    @Input() hasLoading     : boolean;
    @Input() isLoading      : boolean;

    @Input() fullWidth      : boolean;

    @Input() class          : string;

    ngOnInit() {
        console.log('button', this);
    }
    
}
