import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */

@Component({
    selector: 'bf-logo',
    templateUrl: './logo.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class LogoComponent implements OnInit {
    constructor() {}

    @Input() name: 'videotron' | 'business';
    @Input() size: 'large' | 'medium' | 'small';

    @Input() reversed: boolean;
    /** In order to ensure backward compatibility, it accepts 'EN' and 'FR' as well. */
    @Input() langcode: 'en' | 'fr';

    ngOnInit() {
        console.log('logo', this);
    }
}
