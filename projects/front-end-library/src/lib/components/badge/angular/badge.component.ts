import { Component, ElementRef, OnInit, Input } from "@angular/core";


@Component({
    selector: "bf-badge",
    templateUrl: './badge.component.html',
})
export class BadgeComponent implements OnInit, OnChanges {
    constructor() {}

    @Input() label          : string;
    @Input() hierarchy      : 'primary' | 'secondary' | 'tertiary' | 'tertiary-ground' = 'secondary';
    @Input() noUppercase    : boolean;
    /** Displays an angle on a corner. Won't have any effect if `isRounded` is true*/
    @Input() angle          : '' | 'left' | 'right';
    /** `isRounded` property has precedence over `angle`  */
    @Input() isRounded      : boolean;
    @Input() class          : string;
    @Input() iconName       : string;
    @Input() reversed       : boolean;

    public this.ngClasses = '';

    computetNgClasses() {
        this.ngClasses = [
            String(this.class),
            this.hierarchy                  ? 'bf-badge--' + this.hierarchy : 'bf-badge--secondary',
            this.angle && !this.isRounded   ? 'bf-badge--angle-' + this.angle : '',
            this.isRounded                  ? 'bf-badge--rounded' : ''
        ]
    }

    ngOnInit() {
        console.log('badge', this);
        this.computetNgClasses();
    }

    ngOnChanges() {
        this.computetNgClasses();
    }
}
