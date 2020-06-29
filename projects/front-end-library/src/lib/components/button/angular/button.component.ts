import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: "lib-button",
  templateUrl: './button.component.html',
  styleUrls: ['button.component.scss'],
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
  @Input() type: string = 'small' || 'large' || 'icon';

  /** Sets the color of the button . */
  @Input() color: string = 'primary' || 'secondary' || 'reverse' || 'blue';

  /** Sets the button in mobile mode (full width). */
  @Input() fullWidth: boolean;

  /** Name of the icon */
  @Input() icon: string;

  /**
   * Handler to be called when the button is clicked by a user.
   *
   * Will also block the emission of the event if `disabled` is true.
   */
  @Output() click: EventEmitter<boolean> = new EventEmitter();

  ngOnInit() {}

  onClick() {
    this.click.emit(true);
  }
}
