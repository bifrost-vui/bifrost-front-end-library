import { Component, ViewEncapsulation, OnInit, Input } from "@angular/core";

/**
 * Description of the component Wefwfwe
 *
 */
 
@Component({
  selector: "bf-wefwfwe",
  templateUrl: './wefwfwe.component.html',
  styleUrls: ['../common/style.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WefwfweComponent implements OnInit {
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
        console.log('Wefwfwe', this);
    }
}
