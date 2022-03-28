import { Component, OnInit, OnChanges, Input, ChangeDetectionStrategy, ElementRef, SimpleChanges} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import iconList from '../svg/svg';

@Component({
    selector: 'bf-icon',
    templateUrl: './icon.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnChanges {
    constructor(private element: ElementRef, private sanitizer: DomSanitizer) {
    }

    @Input() name               : string;
    @Input() size               : 'xsmall' | 'small' | 'medium' | 'large' | 'huge';
    @Input() color              : null | 'success' | 'neutral'| 'warning' | 'negative';
    /** Angular only */
    @Input() className          : string;
    /** Drupal only */
    @Input() class              : string;
    @Input() reversed           : boolean;

    public svg                  : SafeHtml;
    public ngClasses            : string[] = [];

    ngOnInit() {
        console.log('icon ngOnInit', this);
        this.computetNgClasses();
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('icon ngOnChanges', this);
        this.computetNgClasses();
        this.updateIcon(`${this.name}`);
    }

    private updateIcon(iconName:string) {
        if(iconName && iconList[`${iconName}`])
        {
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
            this.reversed ? `reversed` : ''
        ]
    }
}