import { Component, ViewEncapsulation, OnInit, Input } from "@angular/core";

/**
 * Description of the component Accordion
 *
 */
 
@Component({
  selector: "bf-accordion",
  templateUrl: './accordion.component.html',
  styleUrls: ['../common/style.scss'],
//   encapsulation: ViewEncapsulation.None
})
export class AccordionComponent implements OnInit {
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
        console.log('Accordion', this);
    }
}
