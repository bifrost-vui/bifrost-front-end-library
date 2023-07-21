import { Component, ElementRef, OnInit, OnChanges, Input } from '@angular/core';
import { IBadge } from './api.model';

@Component({
    selector: 'bf-badge',
    templateUrl: './badge.component.html',
})
export class BadgeComponent implements IBadge, OnInit, OnChanges {
    constructor() {}

    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Displays an angle on a corner. Won't have any effect if `isRounded` is true.
     */
    @Input() angle: null | 'left' | 'right';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Drupal only
     */
    @Input() class: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Angular only
     */
    @Input() className: string;
    /** <span style="color: orange;">__Optional__</span> */
    @Input() hierarchy: 'primary' | 'secondary' | 'tertiary' | 'tertiary-ground' = 'secondary';
    /** <span style="color: orange;">__Optional__</span> */
    @Input() iconName: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * This property has precedence over `angle`.
     */
    @Input() isRounded: boolean = false;
    /**
     * <span style="color: red;">__Required__</span>
     *
     * @required
     */
    @Input() label: string;
    /** <span style="color: orange;">__Optional__</span> */
    @Input() noUppercase: boolean = false;

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
        ];
    }
}
