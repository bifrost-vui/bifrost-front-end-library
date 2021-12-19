import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";


@Component({
    selector: 'bf-section-tiles-key',
    templateUrl: './section-tiles-key.component.html',
})
export class SectionTilesKeyComponent implements OnInit {
    constructor() {}

    @Input() title              : string;
    @Input() tiles              : object[];
    @Input() hasFeaturedLayout  : boolean;

    @Input() class              : string;
    @Input() reversed           : boolean;

    ngOnInit() {
        console.log('Section Tiles Key', this);
    }

}
