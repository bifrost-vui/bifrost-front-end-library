import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-button-nav',
    templateUrl: './button-nav.component.html',
})
export class ButtonNavComponent implements OnInit {
    constructor() {}

    /**
        A button will become a link if `href` is defined.
    */
    @Input() href           : string;
    @Input() label          : string;
    @Input() description    : string;
    @Input() iconName       : string;
    @Input() isFeatured     : boolean;
    @Input() isDisabled     : boolean;

    @Input() dataDismiss    : string;
    @Input() dataToggle     : string;
    @Input() dataTarget     : string;
    @Input() ariaControls   : string;
    @Input() ariaExpanded   : string;
    @Input() ariaLabel      : string;
    @Input() extraAttribute : string;

    @Input() class          : string;
    @Input() reversed       : boolean;
    @Input() highlight      : boolean;

    ngOnInit() {
        console.log('button nav', this);
    }
}
