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

    @Input() label: { text: string, class: string };
    @Input() description: string;

    @Input() id: string;
    @Input() placeholder: string;
    /** email|text(default)|password|phone|search */
    @Input() type: 'text'|'email'|'password'|'tel'|'search';
    /** Will be used if no label.text is defined */
    @Input() ariaLabel: string;

    /**  { text: string, position: 'top'|'bottom'|'left'|'right'  }*/
    @Input() tooltip : { text: string, position: 'top'|'bottom'|'left'|'right'  };

    @Input() isDisabled: boolean;
    @Input() isReadonly: boolean;
    @Input() isInvalid : boolean;
    @Input() isRequired: boolean;

    /** isInvalid must be set to true for the message to display*/
    @Input() errorMessage : string;
    /**  may contain a link : {text: string, url: string}*/
    @Input() info : {text: string, url: string} ;


    ngOnInit() {
        console.log('InputText', this);
    }
}

/**
 * Nice to have in Bifrost version :
 * - next versions : mask options et paterns
        code postal = type texte + mask de saisie,
        credit card : type number + masque de saisie
        Téléphone : type phone + masque de saisie canada
        http://estelle.github.io/input-masking/
 * - bifrostisation du tooltip - tooltip bootstrap en attendant
 * - On a juste 1 orientation (columns) - offrir l'option row
       (label + input côte à côte)
 * */