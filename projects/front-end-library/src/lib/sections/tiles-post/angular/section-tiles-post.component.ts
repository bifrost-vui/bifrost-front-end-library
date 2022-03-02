import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-section-tiles-post',
    templateUrl: './section-tiles-post.component.html',
})
export class SectionTilesPostComponent implements OnInit {
    constructor() {}

    @Input() title              : string;
    @Input() titleTag           : string;
    @Input() tiles              : object[];
    @Input() isFeatured         : boolean;

    @Input() class              : string;
    @Input() reversed           : boolean;

    ngOnInit() {
        console.log('Section Tiles Post', this);
    }

}