import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";


@Component({
    selector: "bf-badge",
    templateUrl: './badge.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class BadgeComponent implements OnInit {
    constructor() {}
    /** The `promotion` variant will ignore `hierarchy`, `angle` and `isRounded` properties*/
    @Input() variant        : null | 'promotion';
    @Input() label          : string;
    @Input() hierarchy      : 'primary' | 'secondary' | 'tertiary' | 'tertiary-ground';
    @Input() noUppercase    : boolean;
    /** Displays an angle on a corner. Won't have any effect if `isRounded` is true*/
    @Input() angle          : null | 'left' | 'right';
    /** `isRounded` property has precedence over `angle`  */
    @Input() isRounded      : boolean;
    @Input() class          : string;
    @Input() iconName       : string;
    @Input() reversed       : boolean;

    ngOnInit() {
        console.log('badge', this);
    }
}