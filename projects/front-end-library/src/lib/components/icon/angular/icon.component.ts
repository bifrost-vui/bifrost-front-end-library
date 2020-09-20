import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */
 
@Component({
  selector: "bf-icon",
  templateUrl: './icon.component.html',
//   styleUrls: ['../common/style.scss'],
})
export class IconComponent implements OnInit {
  constructor() {}

  /** Sets the color of the icon. */
  @Input() color: string;

  /** Sets the size of the icon. */
  @Input() size: string;

  /** Class override */
  @Input() styleClass: string;

  ngOnInit() {
      console.log('icon', this);
  }
}
