import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'bf-section-keys',
    templateUrl: './section-keys.component.html',
})
export class SectionKeysComponent implements OnInit {
    constructor() {}

    @Input() title          : string;
    @Input() titleTag       : string;
    @Input() description    : string;
    @Input() keys           : object[];
    @Input() buttons        : object[];
    @Input() align          : 'left' | 'center';
    @Input() background     : 'ground' | 'underground' | 'highlight';

    @Input() class          : string;
    @Input() reversed       : boolean;

    ngOnInit() {
        console.log('section keys', this);
    }
}
