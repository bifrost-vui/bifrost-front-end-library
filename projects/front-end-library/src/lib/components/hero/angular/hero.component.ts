import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */
 
@Component({
    selector: 'bf-hero',
    templateUrl: './hero.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class HeroComponent implements OnInit {
    constructor() {}

    @Input() bgImagePosition: string;
    @Input() bgImage: string;
    @Input() bgMediumImage: string;
    @Input() bgLargeImage: string;
    
    @Input() containerClass: string;
    @Input() breadcrumb: string;
    @Input() title: string;
    @Input() subTitle: string;

    @Input() reversed: boolean;

    ngOnInit() {
        console.log('hero', this);
    }
    
}
