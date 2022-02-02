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

    @Input() class: string;

    /** expected : { text: string, class: string } */
    @Input() label: object;
    @Input() description: string;
    @Input() id: string;
    @Input() placeholder: string;
    @Input() value: string;

    /** email|text(default)|password|phone|search  */
    @Input() inputType: 'text'|'password'|'search'|'tel'|'email';

    /** Will be used if no label.text is defined */
    @Input() ariaLabel: string;

    /**  expected : { text: string, position: top|bottom|left|right  }*/
    @Input() tooltip : object;

    @Input() isDisabled: boolean;
    @Input() isReadonly: boolean;
    @Input() isInvalid : boolean;
    @Input() isRequired: boolean;

    /** the message to display only when isInvalid is true*/
    @Input() errorMessage : string;

    @Input() validationTitle : string;
    @Input() validationList : object[];

    /**  expected : {text: string, url: string}*/
    @Input() info : object;


    ngOnInit() {
        console.log('InputText', this);
    }
}

/**
 * Nice to have in Bifrost version :
 * - next versions : mask options et paterns
        code postal = type text + mask de saisie,
        credit card : type number + masque de saisie
        Téléphone : type phone + masque de saisie canada
        http://estelle.github.io/input-masking/
 * - bifrostisation du tooltip - tooltip bootstrap en attendant
 * - On a juste 1 orientation (columns) - offrir l'option row
       (label + input côte à côte)
 * */