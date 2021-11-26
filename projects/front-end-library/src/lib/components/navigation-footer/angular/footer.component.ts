import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */

interface ILogo {
    href: string;
    name: string;
}
 
@Component({
    selector: 'bf-footer',
    templateUrl: './footer.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class FooterComponent implements OnInit {
    constructor() {}

    /** Sets Footer Links on Bottom Footer. */
    @Input() linkFields         : any[];

    /** Sets Footer Links. */
    @Input() links              : any[];

    /** See [Logo Component API](/?path=/docs/components-logo--drupal). E.g. `logo = { href: "#", name: "videotron" }` */
    @Input() logo               : ILogo;

    @Input() hasBackToTopLink   : boolean;
    @Input() backToTopLabel     : string;

    @Input() isReduced          : boolean;

    @Input() theme              : string;
    @Input() reversed           : boolean;
    @Input() languageBlock      : any;

    ngOnInit() {
        console.log('footer', this);
    }
    
}
