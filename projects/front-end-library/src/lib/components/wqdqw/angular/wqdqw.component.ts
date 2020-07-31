import { Component, ViewEncapsulation, OnInit, Input } from "@angular/core";

/**
 * Description of the component Wqdqw
 *
 */
 
@Component({
  selector: "bf-wqdqw",
  templateUrl: './wqdqw.component.html',
  styleUrls: ['../common/style.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WqdqwComponent implements OnInit {
    constructor() {}

    /**
    * The inner text.
    *
    * @required
    */
    @Input() label: string;

    /** Class override */
    @Input() styleClass: string;

    ngOnInit() {
        console.log('Wqdqw', this);
    }
}
