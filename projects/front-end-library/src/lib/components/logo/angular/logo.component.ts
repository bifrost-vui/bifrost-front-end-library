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

    /** In order to ensure backward compatibility, it accepts 'EN' and 'FR' as well. */
    @Input() langcode: 'en' | 'fr';
    @Input() name: 'videotron' | 'business';
    @Input() reversed: boolean;
    @Input() size: 'large' | 'medium' | 'small';

    ngOnInit() {
        console.log('logo', this);
    }
}
