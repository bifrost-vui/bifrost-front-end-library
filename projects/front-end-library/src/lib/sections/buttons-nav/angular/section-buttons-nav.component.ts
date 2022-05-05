import { Component, OnInit, Input } from '@angular/core';
import { IButtonNav } from '../../../components/button-nav/angular/api.model';
import { ILink } from '../../../components/link/angular/api.model';

interface IAsideSection {
    title: string;
    description: string;
    link: ILink;
}

@Component({
    selector: 'bf-section-buttons-nav',
    templateUrl: './section-buttons-nav.component.html',
})
export class SectionButtonsNavComponent implements OnInit {
    constructor() {}

    @Input() title: string;
    @Input() titleTag: string;
    @Input() buttons: IButtonNav[];
    @Input() isFeatured: boolean;
    @Input() background: 'ground' | 'underground' | 'highlight';
    /** Add a section at the right. `{ title, description, link }` */
    @Input() asideSection: IAsideSection;

    @Input() extraAttribute: string;
    @Input() class: string;
    @Input() reversed: boolean;

    ngOnInit() {
        console.log('section buttons nav', this);
    }
}