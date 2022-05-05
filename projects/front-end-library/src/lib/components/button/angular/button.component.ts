import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: "bf-button",
    templateUrl: './button.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class ButtonComponent implements OnInit {
    constructor() {}

    @Input() label: string;
    @Input() hierarchy: null | 'primary' | 'primary-alt' | 'secondary' | 'tertiary';
    /** A button will become a link if `href` is defined as long as it is not Disabled or a submit button. */
    @Input() href: string;
    @Input() fullWidth: boolean;
    @Input() class: string;
    @Input() id: string;
    @Input() extraAttribute: string;

    @Input() isDisabled: boolean;
    @Input() isLoading: boolean;
    @Input() hasLoading: boolean;

    @Input() iconName: string;
    @Input() iconPosition: null | 'left' | 'right';
    /** Changing the size of the icon is not recommended. */
    @Input() iconSize: string;

    @Input() ariaLabel: string;
    @Input() ariaControls: string;
    @Input() ariaExpanded: string;

    @Input() dataDismiss: string;
    @Input() dataToggle: string;
    @Input() dataTarget: string;

    @Input() isSubmit: boolean;
    @Input() formId: string;
    @Input() formAction: string;
    @Input() formEncryptionType: null | 'application/x-www-form-urlencoded' |'multipart/form-data' | 'text/plain';
    @Input() formTarget: null | '_self' | '_blank' | '_parent' | '_top';
    @Input() formMethod: string;
    @Input() formNoValidate: boolean;

    ngOnInit() {
        console.log('button', this);
    }
}