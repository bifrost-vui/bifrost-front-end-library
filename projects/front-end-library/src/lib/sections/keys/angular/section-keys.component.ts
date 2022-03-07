import { Component, OnInit, Input }     from '@angular/core';
import { IButton }                      from '../../../components/button/angular/api.model';
import { ILink }                        from '../../../components/link/angular/api.model';

export interface IKey {
    iconName        : string;
    title           : string;
    titleTag        : string;
    description     : string;
    link            : ILink;
}

@Component({
    selector: 'bf-section-keys',
    templateUrl: './section-keys.component.html',
})
export class SectionKeysComponent implements OnInit {
    constructor() {}

    @Input() title          : string;
    @Input() titleTag       : string;
    @Input() description    : string;
    @Input() keys           : IKey[];
    @Input() buttons        : IButton[];
    @Input() align          : 'left' | 'center';
    @Input() background     : 'ground' | 'underground' | 'highlight';

    @Input() class          : string;
    @Input() reversed       : boolean;

    ngOnInit() {
        console.log('section keys', this);
    }
}
