import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { ILink } from "../../link/angular/api.model";

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
    /** Displays bellow the title and may contain HTML tags */
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
    /** Creates a bullet list with a default `check` or `dot` icon - you can still specify another iconName in `content[]` */
    @Input() defaultBullet  : 'check' | 'dot' | null;
    /** Adds a bottom border between list elements */
    @Input() hasDivider         : boolean;
    @Input() reversed           : boolean;

    @Input() contentClass       : string;
    @Input() class              : string;

    ngOnInit() {
        console.log('List', this);
    }
}