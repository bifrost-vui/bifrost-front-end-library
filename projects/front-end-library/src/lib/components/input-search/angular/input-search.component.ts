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

    @Input() reversed               : boolean = true;
    @Input() class                  : string;

    @Input() isDisabled             : boolean;
    @Input() isChecked              : boolean;
    @Input() inputId                : string;
    @Input() inputClass             : string = 'js-alg-searchbox-input';
    @Input() mtValue                : number = 1;
    @Input() inputIconPosition      : string;
    @Input() inputType              : string;
    @Input() inputPlaceholder       : string = 'What are you looking for?';
    @Input() inputName              : string;
    @Input() inputValue             : string;
    @Input() extraAttribute         : string;
    @Input() inputSubmitId          : string;

    @Input() iconColor              : string = 'svg-fill--dark';

    @Input() label                  : string = 'Label';
    @Input() labelClass             : string;
    @Input() labelExtraAttribute    : string;

    @Input() inputSubmitValue       : string;
    @Input() extraAttributeSubmit   : string;

    @Input() buttonClass            : string;
    @Input() iconClass              : string;
    @Input() invalidMsg             : string;

    ngOnInit() {
        console.log('input-search', this);
    }
    
}
