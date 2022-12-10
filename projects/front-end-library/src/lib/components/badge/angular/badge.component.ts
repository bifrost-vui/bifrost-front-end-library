import { Component, ElementRef, OnInit, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'bf-badge',
    templateUrl: './badge.component.html',
})
export class BadgeComponent implements OnInit, OnChanges {
    constructor() {}

    @Input() label: string;
    @Input() hierarchy: 'primary' | 'secondary' | 'tertiary' | 'tertiary-ground';
    @Input() noUppercase: boolean;
    /** Displays an angle on a corner. Won't have any effect if `isRounded` is true*/
    @Input() angle: null | 'left' | 'right';
    /** `isRounded` property has precedence over `angle`  */
    @Input() isRounded: boolean;
    @Input() iconName: string;
    /** Angular only */
    @Input() className: string;
    /** Drupal only */
    @Input() class: string;
    @Input() reversed: boolean;

    public ngClasses: string[] = [];

    ngOnInit() {
        console.log('badge', this);
        this.computetNgClasses();
    }

    ngOnChanges() {
        this.computetNgClasses();
    }

    computetNgClasses() {
        this.ngClasses = [
            this.className ? String(this.className) : '',
            this.hierarchy ? 'bf-badge--' + this.hierarchy : 'bf-badge--secondary',
            this.angle && !this.isRounded ? 'bf-badge--angle-' + this.angle : '',
            this.isRounded ? 'bf-badge--rounded' : '',
            this.reversed ? `reversed` : '',
        ];
    }
}
