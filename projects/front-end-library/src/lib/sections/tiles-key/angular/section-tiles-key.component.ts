import { Component, OnInit, Input } from '@angular/core';
import { ITileKey } from '../../../components/tile-key/angular/api.model';

@Component({
    selector: 'bf-section-tiles-key',
    templateUrl: './section-tiles-key.component.html',
})
export class SectionTilesKeyComponent implements OnInit {
    constructor() {}

    @Input() title              : string;
    @Input() tiles              : ITileKey[];
    @Input() hasFeaturedLayout  : boolean;

    @Input() class              : string;
    @Input() reversed           : boolean;

    ngOnInit() {
        console.log('Section Tiles Key', this);
    }

}
