import { Component, ViewEncapsulation, OnInit, Input } from "@angular/core";

/**
 * Description of the component Qwdqwd
 *
 */
 
@Component({
  selector: "bf-qwdqwd",
  templateUrl: './qwdqwd.component.html',
  styleUrls: ['../common/style.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QwdqwdComponent implements OnInit {
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
        console.log('Qwdqwd', this);
    }
}
