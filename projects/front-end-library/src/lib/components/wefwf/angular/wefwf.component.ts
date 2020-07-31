import { Component, ViewEncapsulation, OnInit, Input } from "@angular/core";

/**
 * Description of the component Wefwf
 *
 */
 
@Component({
  selector: "bf-wefwf",
  templateUrl: './wefwf.component.html',
  styleUrls: ['../common/style.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WefwfComponent implements OnInit {
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
        console.log('Wefwf', this);
    }
}
