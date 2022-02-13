import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from '@angular/core';

interface IImage {
    src         : string;
    icon        : object | string;
    isFill      : boolean;
}

@Component({
    selector: 'bf-text-image',
    templateUrl: './text-image.component.html',
})
export class TextImageComponent implements OnInit {
    constructor() {}
    /** `image: { src: "", isFill: true, icon: { name: "placeholder", position: "bottom-left" } }`  */
    @Input() image                  : IImage;
    @Input() upperTitle             : string;
    @Input() title                  : string;
    @Input() titleTag               : string;
    @Input() subtitle               : string;
    /** Not work with image. */
    @Input() textAlign              : 'left' | 'center';
    @Input() description            : string;
    @Input() buttons                : object[];
    @Input() links                  : object[];
    @Input() rowButtons             : object[];
    @Input() imagePosition          : 'right' | 'left';

    @Input() class                  : string;
    @Input() reversed               : boolean;

    ngOnInit() {
        console.log('text image', this);
    }
}
