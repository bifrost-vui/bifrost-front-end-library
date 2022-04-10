import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: "bf-button",
    templateUrl: './button.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class ButtonComponent implements OnInit {
    constructor() {}

    @Input() hierarchy: '' | 'primary' | 'primary-alt' | 'secondary' | 'tertiary';
    @Input() fullWidth: boolean;

    /** A button will become a link if `href` is defined as long as it is not Disabled or a submit button. */
    @Input() href: string;
    @Input() label: string;
    @Input() ariaLabel: string;

    @Input() iconName: string;
    @Input() iconPosition: '' | 'left' | 'right';
    /** Changing the size of the icon isn't recommended. */
    @Input() iconSize: string;

    @Input() dataDismiss: string;
    @Input() dataToggle: string;
    @Input() dataTarget: string;
    @Input() ariaControls: string;
    @Input() ariaExpanded: string;
    @Input() extraAttribute: string;
    @Input() class: string;

    @Input() formId: string;
    @Input() formAction: string;
    @Input() formEncryptionType: '' | 'application/x-www-form-urlencoded' |'multipart/form-data' | 'text/plain';
    @Input() formTarget: null | '_self' | '_blank' | '_parent' | '_top';
    @Input() formMethod: string;
    @Input() formNoValidate: boolean;

    @Input() isDisabled: boolean;
    @Input() isSubmit: boolean;
    @Input() isAutofocus: boolean;
    @Input() isLoading: boolean;
    @Input() hasLoading: boolean;

    ngOnInit() {
        console.log('button', this);
    }

}