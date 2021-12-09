import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";


@Component({
    selector: 'bf-section-tiles-ksp',
    templateUrl: './section-tiles-ksp.component.html',
})
export class SectionTilesKSPComponent implements OnInit {
    constructor() {}

    @Input() title              : string;
    @Input() tiles              : object[];
    @Input() hasFeaturedLayout  : boolean;

    @Input() class              : string;
    @Input() reversed           : boolean;

    ngOnInit() {
        console.log('Section Tiles KSP', this);
    }

}
