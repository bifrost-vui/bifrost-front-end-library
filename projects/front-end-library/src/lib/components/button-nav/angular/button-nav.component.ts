import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: "bf-button-nav",
    templateUrl: './button-nav.component.html',
})
export class ButtonNavComponent implements OnInit {
    constructor() {}

    @Input() label          : string;
    /**
        A button will become a link if `href` is defined.
    */
    @Input() href           : string;
    @Input() isDisabled     : boolean;
    @Input() iconName       : string;
    @Input() isFeatured     : boolean;

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
