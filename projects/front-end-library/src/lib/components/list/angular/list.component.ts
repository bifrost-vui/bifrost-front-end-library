import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

/**
 * Description of the component List
 *
 */
interface IListItems {
    iconName    : string;
    label       : string;
    link        : object;
}

@Component({
  selector: 'bf-list',
  templateUrl: './list.component.html',
  // styleUrls: ['../scss/index.scss'],
})
export class ListComponent implements OnInit {
    constructor() {}

    /** Expected format:
     <pre>
    [{
          label*  : "Label",
          iconName: "placeholder"
          link    : {...}
    },
    {...}]</pre>
    */
    @Input() content          : IListItems[];

    /** When `true` creates a bullet list with a default `check` icon */
    @Input() hasCheckBulletIcon : boolean;
    /** Adds a bottom border between list elements */
    @Input() hasDivider         : boolean;
    @Input() reversed           : boolean;
    @Input() class              : string;

    ngOnInit() {
        console.log('List', this);
    }
}