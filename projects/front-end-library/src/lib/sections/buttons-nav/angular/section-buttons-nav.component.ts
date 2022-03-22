import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-section-buttons-nav',
    templateUrl: './section-buttons-nav.component.html',
})
export class SectionButtonsNavComponent implements OnInit {
    constructor() {}

    @Input() title          : string;
    @Input() titleTag       : string;
    @Input() buttons        : object[];
    @Input() isFeatured     : boolean;
    @Input() rightSection   : object;
    @Input() background     : 'ground' | 'underground' | 'highlight';

    @Input() extraAttribute : string;
    @Input() class          : string;
    @Input() reversed       : boolean;
    @Input() highlight      : boolean;

    ngOnInit() {
        console.log('section buttons nav', this);
    }
}
