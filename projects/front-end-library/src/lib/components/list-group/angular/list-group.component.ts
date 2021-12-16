import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

interface ILink {
    label          : string;
    href           : string;
    iconName       : string;
    iconPosition   : string;
}


@Component({
  selector: 'bf-list-group',
  templateUrl: './list-group.component.html',
  // styleUrls: ['../scss/index.scss'],
})
export class ListGroupComponent implements OnInit {
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
    /** [list](/?path=/docs/components-list--drupal) component.*/
    @Input() contentList          : object;
    /** When `true` creates a bullet list with a default `check` icon - you can still specify another iconName in `content[]` */
    /** Adds a top border */
    @Input() hasDivider         : boolean;
    @Input() reversed           : boolean;
    @Input() class              : string;

    ngOnInit() {
        console.log('ListGroup', this);
    }
}
export class ListGroupModule { }