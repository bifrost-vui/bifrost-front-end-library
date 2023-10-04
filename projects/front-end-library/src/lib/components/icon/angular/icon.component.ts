import { Component, OnChanges, Input, ChangeDetectionStrategy, ElementRef, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import iconList from '../svg/svg';

@Component({
    selector: 'bf-icon',
    templateUrl: './icon.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements OnChanges {
    constructor(private element: ElementRef, private sanitizer: DomSanitizer) {}

    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on the icon main container.
     */
    @Input() class: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on the icon main container.
     */
    @Input() className: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Color scheme of the icon.
     * - `primary` is the default icon without color modification and the rest is for "feedback" colors.
     */
    @Input() color: 'primary' | 'neutral' | 'success' | 'warning' | 'negative' = 'primary';
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * Name of the icon.
     *
     * @required
     */
    @Input() name: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Size of the icon.
     */
    @Input() size: 'xsmall' | 'small' | 'medium' | 'large' | 'huge' = 'small';

    public svg: SafeHtml;
    public ngClasses: string[] = [];

    ngOnInit() {
        console.log('icon ngOnInit', this);
        this.computetNgClasses();
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('icon ngOnChanges', this);
        this.computetNgClasses();
        this.updateIcon(`${this.name}`);
    }

    private updateIcon(iconName: string) {
        if (iconName && iconList[`${iconName}`]) {
            const sizeSuffix = ['large', 'huge'].includes(this.size) ? 'lg' : 'sm';
            const svg = iconList[`${iconName}`][`${sizeSuffix}`];
            this.svg = this.sanitizer.bypassSecurityTrustHtml(svg);
        }
    }

    private computetNgClasses() {
        this.ngClasses = [
            this.className ? String(this.className) : '',
            this.size ? `size-${this.size}` : 'size-small',
            this.color ? `color-${this.color}` : '',
        ];
    }
}
