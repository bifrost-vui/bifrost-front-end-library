import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */
 
@Component({
    selector: "bf-button-icon",
    templateUrl: './button-icon.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class ButtonIconComponent implements OnInit {
    constructor() {}

    @Input() icon       : string;
    @Input() size       : string;
    @Input() reversed   : boolean;

    ngOnInit() {
        console.log('button-icon', this);
    }
    
}
