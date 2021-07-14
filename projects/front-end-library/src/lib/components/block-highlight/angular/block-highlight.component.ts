import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

interface IImage {
    src         : string;
}
 
@Component({
    selector: 'bf-block-highlight',
    templateUrl: './block-highlight.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class BlockHighlightComponent implements OnInit {
    constructor() {}

    @Input() variant                : 'featured' | 'promo';
    @Input() image                  : IImage;
    @Input() visualBackgroundColor  : string;
    @Input() blockBackgroundColor   : 'ground' | 'underground';
    @Input() paragraph              : string;
    @Input() button                 : object;

    @Input() title                  : string;
    /** E.g. `p` */
    @Input() titleTag               : string;

    @Input() class                  : string;
    @Input() reversed               : boolean;

    ngOnInit() {
        console.log('block highlight', this);
    }   
}
