import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */
 
@Component({
    selector: 'bf-footer',
    templateUrl: './footer.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class FooterComponent implements OnInit {
    constructor() {}

    @Input() theme: string = 'videotron';

    @Input() reversed: boolean;

    /** Sets Footer Links on Bottom Footer. */
    @Input() linkFields: any[];

    /** Sets Footer Links. */
    @Input() links: any[];

    @Input() logo_href: string;
    @Input() logo_name: string;

    @Input() hasBackToTopLink: boolean;
    @Input() backToTopLabel: string;

    @Input() languageBlock: string;

    ngOnInit() {
        console.log('footer', this);
    }
    
}
