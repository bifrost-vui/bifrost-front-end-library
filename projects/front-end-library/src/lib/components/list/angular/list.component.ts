import { Component, OnInit, Input } from '@angular/core';
import { ILink }                    from "../../link/angular/api.model";

@Component({
    selector: 'bf-list',
    templateUrl: './list.component.html',
    // styleUrls: ['../scss/index.scss'],
})
export class ListComponent implements OnInit {
    constructor() {}

    @Input() title              : string;
    @Input() titleTag           : string;
    @Input() titleClass         : string;
    /** Displays on the right size of the title */
    @Input() link               : ILink;
    /** Displays on the right size of the title if no link is defined */
    @Input() description        : string;
    /** Displays bellow the title */
    @Input() details            : string;
    /** Expected format:
     <pre style='font-size: .75rem; padding: 0 1rem; margin:0; background-color: #F8F8F8'>[{
     label: "Label",
     iconName: "placeholder"
     link: {
          label: "link",
          href: "https://www.example.com/"
          }
     },
     {...}]</pre>*/
    @Input() content            : object;
    /** Adds a bottom border to list component */
    @Input() reversed           : boolean;
    /** affects lists items :  Eg. the class `list--divider` will add separators between items*/
    @Input() contentClass       : string;
    @Input() class              : string;

    ngOnInit() {
        console.log('List', this);
    }
}