import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-accordion',
    templateUrl: './accordion.component.html',
})
export class AccordionComponent implements OnInit {
    constructor() {}

    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on Accordion main element.
     */
    @Input() class: string;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * - It is the content of the accordion.
     * - This content is below the header zone of the accordion.
     * - It is hidden or visible depending on the `collapse/extend` state.
     *
     * @required
     */
    @Input() content: HTMLElement | 'TwigBlock';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Text or component used as emphasis to the accordion item.
     * - It is displayed on the right of `title`.
     * - It can be a rich text string (HTMLElement) or a Twig Block.
     */
    @Input() emphasis: HTMLElement | 'TwigBlock';
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * - Accordion main element's `id` attribute.
     * - Needed to differentiate with other accordion items.
     *
     * @required
     */
    @Input() id: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Is the Accordion item disabled?
     */
    @Input() isDisabled: boolean = false;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Is the Accordion opened by default?
     */
    @Input() isOpenedByDefault: boolean = false;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * Title of the accordion.
     *
     * @required
     */
    @Input() title: string;

    ngOnInit() {
        console.log('Accordion', this);
    }
}
