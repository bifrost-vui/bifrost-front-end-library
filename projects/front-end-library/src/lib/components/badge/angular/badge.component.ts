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
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It will change the `background-color` of the badge.
     * - Even if `hierarchy` prop is provided, this prop will have priority if a custom color is provided.
     * - The string needs to be a color name or an hexadecimal color code (ex.: #F6F6F6).
     * - In Storybook, there is an issue with the `#` character, so it breaks the rendering of the component.
         To test this property, use a color name like `red`, `blue`, `yellow`, `black`, etc.
     */
    @Input() customBgColor: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It will change the text `color` of the badge.
     * - The string needs to be a color name or an hexadecimal color code (ex.: #F6F6F6).
     * - In Storybook, there is an issue with the `#` character, so it breaks the rendering of the component.
         To test this property, use a color name like `red`, `blue`, `yellow`, `black`, etc.
     */
    @Input() customFontColor: string;
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
