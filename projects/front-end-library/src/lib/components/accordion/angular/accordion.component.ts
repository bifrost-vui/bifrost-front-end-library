import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-accordion',
    templateUrl: './accordion.component.html',
})
export class AccordionComponent implements OnInit {
    constructor() {}

    /* In alphabetical order (remove this comment) */

    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on Accordion main element.
     */
    @Input() class: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Emphasis content on the right of `title`.
     * - It can be a rich text string (HTMLElement) or a Twig Block.
     */
    @Input() emphasis: HTMLElement | 'TwigBlock';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Accordion main element's `id` attribute.
     */
    @Input() id: string;
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
