import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */
 
@Component({
  selector: "bf-button",
  templateUrl: './button.component.html',
  styleUrls: ['../common/style.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {
  constructor() {}

  /**
   * The inner text of the button.
   *
   * @required
   */
  @Input() label: string;

  /** Sets the button to a disabled state. */
  @Input() disabled: boolean;

  /** Sets the visual type of the button . */
  @Input() size: string = '' || 'sm' || 'md' || 'lg';

  /** Sets the color of the button . */
  @Input() color: string = 'primary' || 'secondary' || 'reverse';

  /** Variant  */
  @Input() variant: string = 'business';

  /** Sets the button in mobile mode (full width). */
  @Input() fullWidth: boolean;

  /** Name of the icon */
  @Input() icon: string;

  /** Class override */
  @Input() styleClass: string;

  /**
   * Handler to be called when the button is clicked by a user.
   *
   * Will also block the emission of the event if `disabled` is true.
   */
  @Output() click: EventEmitter<boolean> = new EventEmitter();

  ngOnInit() {
      console.log('button', this);
  }

  onClick() {
    this.click.emit(true);
  }
}
