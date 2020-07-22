import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

/**
 * For **Angular** only.
 *
 */
 
@Component({
  selector: "lib-template-contact-form",
  templateUrl: './contact-form.component.html',
  styleUrls: ['../common/style.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactFormComponent implements OnInit {
  constructor() {}

  /**
   * The inner text of the template.
   *
   * @required
   */
  @Input() text: string;

  /** Class override */
  @Input() styleClass: string;

  ngOnInit() {
      console.log('contact form his', this);
  }
}
