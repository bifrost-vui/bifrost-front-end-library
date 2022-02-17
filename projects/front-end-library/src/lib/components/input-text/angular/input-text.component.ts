import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

/**
 * Description of the component InputText
 *
 */

@Component({
  selector: 'bf-input-text',
  templateUrl: './input-text.component.html',
  // styleUrls: ['../scss/index.scss'],
})
export class InputTextComponent implements OnInit {
    constructor() {}

    // Input-text Properties
    /** Expected values : text(default)|password|search|tel|email */
    @Input() inputType      : 'text'|'password'|'search'|'tel'|'email';
    @Input() id             : string;
    @Input() name           : string;
    @Input() placeholder    : string;
    @Input() value          : string;
    /** Refers to the Input autocomplete attribute */
    @Input() autocomplete   : boolean;
    /** The maximum number of characters allowed */
    @Input() maxlength      : number;
    /** The minimum number of characters allowed */
    @Input() minlength      : number;
    /** Will be used if no `label.text` is defined */
    @Input() ariaLabel      : string;
    /** The value should be a regular expression */
    @Input() pattern        : string;
    /** Refers to the input title attribute. Define when pattern is used*/
    @Input() title          : string;
    @Input() isDisabled     : boolean;
    @Input() isReadonly     : boolean;
    @Input() isInvalid      : boolean;
    @Input() isRequired     : boolean;
    @Input() extraAttribute : string;
    @Input() inputClass     : string;

    // Other elements components
    /** Object expected : { text: string, class: string }<br>
     You can also pass the label text as a `string`*/
    @Input() label          : any;
    /** Object Expected : { text: string, position: top|bottom|left|right }<br>
     You can also pass the tooltip text as a `string` */
    @Input() tooltip        : any;
    @Input() description    : string;
    /** the message to display only when isInvalid is true*/
    @Input() errorMessage   : string;
    /** for Password input type only */
    @Input() validationTitle: string;
    /** for Password input type only. Expected : { class: string, label: string } */
    @Input() validationList : object[];
    /** expected : { text: string, url: string } <br>
     You can also pass the info text as a `string` */
    @Input() info           : any;
    @Input() class          : string;

    ngOnInit() {
        console.log('InputText', this);
    }
}