import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: "bf-section-keys",
    templateUrl: './section-keys.component.html',
})
export class SectionKeysComponent implements OnInit {
    constructor() {}

    @Input() title          : string;
    @Input() titleTag       : string;
    @Input() keys           : object[];
    @Input() buttons        : object[];

    @Input() class          : string;
    @Input() reversed       : boolean;
    @Input() highlight      : boolean;

    ngOnInit() {
        console.log('section keys', this);
    }
}
