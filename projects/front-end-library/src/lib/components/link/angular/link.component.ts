import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-link',
    templateUrl: './link.component.html',
})
export class LinkComponent implements OnInit {
    constructor() {}

    @Input() label          : string;
    @Input() labelClass     : string;
    @Input() href           : string;
    @Input() hierarchy      : 'native' | 'primary';
    @Input() iconName       : string;
    @Input() iconPosition   : 'left' | 'right';
    @Input() isUnderline    : boolean;
    @Input() isDisabled     : boolean;
    @Input() title          : string;
    @Input() ariaLabel      : string;
    @Input() extraAttribute : string;
    @Input() rel            : string;

    @Input() class          : string;
    @Input() reversed       : boolean;

    ngOnInit() {
        console.log('Link', this);
    }
}
