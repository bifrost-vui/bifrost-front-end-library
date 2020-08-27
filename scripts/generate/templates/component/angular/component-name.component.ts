import { Component, ViewEncapsulation, OnInit, Input } from "@angular/core";

/**
 * Description of the component ComponentName
 *
 */
 
@Component({
  selector: "bf-component-name",
  templateUrl: './component-name.component.html',
  styleUrls: ['../common/style.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComponentNameComponent implements OnInit {
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
        console.log('ComponentName', this);
    }
}
