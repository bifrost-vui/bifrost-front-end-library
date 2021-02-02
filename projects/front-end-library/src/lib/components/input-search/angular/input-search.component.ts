import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */
 
@Component({
    selector: 'bf-input-search',
    templateUrl: './input-search.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class InputSearchComponent implements OnInit {
    constructor() {}

    @Input() reversed               : boolean;
    @Input() class                  : string;

    @Input() isDisabled             : boolean;
    @Input() isChecked              : boolean;

    @Input() label_value             : string = 'Label';
    @Input() label_class             : string;
    @Input() label_extraAttribute    : string;

    @Input() input_id                : string;
    @Input() input_class             : string;
    @Input() input_iconPosition      : string;
    @Input() input_type              : string;
    @Input() input_placeholder       : string = 'What are you looking for?';
    @Input() input_name              : string;
    @Input() input_value             : string;
    @Input() input_extraAttribute    : string;
    
    @Input() iconColor              : string;
    @Input() iconClass              : string;

    @Input() inputSubmit_value       : string;
    @Input() inputSubmit_id          : string;
    @Input() inputSubmit_extraAttribute: string;

    @Input() mtValue                 : number = 1;

    @Input() buttonClass            : string;
    @Input() invalidMsg             : string;

    ngOnInit() {
        console.log('input-search', this);
    }
    
}
