import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

/**
 * Description of the component List
 *
 */
interface ILink {
    label           : string;
    href            : string;
    iconName        : string;
    iconePosition   : string;
}

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
    <pre> [{
        label*   : "Label",
        iconName : "placeholder"
        link : {
            label: 'link',
            href: 'https://www.example.com'
        }
    },
    {...}] </pre>
    */
    @Input() content            : object;

    /** When `true` creates a bullet list with a default `check` icon - you can still specify another iconName in `content[]` */
    @Input() hasCheckBulletIcon : boolean;
    /** Adds a bottom border between list elements */
    @Input() hasDivider         : boolean;
    @Input() reversed           : boolean;
    @Input() class              : string;

    ngOnInit() {
        console.log('List', this);
    }
}