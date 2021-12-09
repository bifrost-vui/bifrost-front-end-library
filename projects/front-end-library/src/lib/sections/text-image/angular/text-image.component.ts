import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

interface IImage {
    src         : string;
    icon        : object | string;
    fit         : 'fit' | 'fill';
}
 
@Component({
    selector: 'bf-text-image',
    templateUrl: './text-image.component.html',
})
export class TextImageComponent implements OnInit {
    constructor() {}
    /** image: { src: '', fit: 'fill', icon: { name: 'placeholder', position: 'bottom-left' } }  */
    @Input() image                  : IImage;
    @Input() upperTitle             : string;
    @Input() title                  : string;
    @Input() subtitle               : string;
    @Input() description            : string;
    @Input() buttons                : object[];
    @Input() links                  : object[];
    @Input() rowButtons             : object[];
    @Input() layout                 : 'text-image' | 'image-text';

    @Input() class                  : string;
    @Input() reversed               : boolean;

    ngOnInit() {
        console.log('text image', this);
    }   
}
