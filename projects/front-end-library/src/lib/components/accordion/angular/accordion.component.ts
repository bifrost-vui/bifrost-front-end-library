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
     * Background color of the Accordion element.
     */
    @Input() background: 'ground' | 'underground' | 'highlight' = 'ground';
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
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - The emphasis block is always on the right of the `title` and its size is all the space available between the `title` and the `icon`.
     * - This property is to set the position of its content inside the block.
     */
    @Input() emphasisPosition: 'left' | 'center' | 'right' = 'left';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Does the Accordion have a border?
     */
    @Input() hasBorder: boolean = true;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Position of the icon relative to `title`.
     */
    @Input() iconPosition: 'left' | 'right' = 'right';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Look of the icon.
     * - Can be position on the left or on the right of `title` with `iconPosition` property.
     */
    @Input() iconType: 'chevron' | 'plus-minus' = 'chevron';
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
     * - Accordions group container element `id` attribute.
     * - See [Group of accordions](/?path=/docs/components-accordion--drupal#group-of-accordions) at the top of the page.
     */
    @Input() idParent: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Is the Accordion border, if `hasBorder` is set to `true`, rounded?
     */
    @Input() isBorderRounded: boolean = true;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Is the Accordion item disabled?
     */
    @Input() isDisabled: boolean = false;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Is the Accordion expanded by default?
     */
    @Input() isExpandedByDefault: boolean = false;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Padding on the `x` axis (left & right).
     */
    @Input() paddingX: 'none' | 'small' | 'medium' | 'large' = 'medium';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Padding on the `y` axis (top & bottom).
     */
    @Input() paddingY: 'none' | 'small' | 'medium' | 'large' = 'medium';
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * Title of the accordion.
     *
     * @required
     */
    @Input() title: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Size of the `title`.
     */
    @Input() titleSize: 'normal' | 'h2' | 'h3' = 'normal';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * HTML tag of the `title`.
     */
    @Input() titleTag: 'div' | 'h2' | 'h3' = 'div';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Font-weight of the `title`.
     */
    @Input() titleWeight: 'normal' | 'bold' = 'bold';

    ngOnInit() {
        console.log('Accordion', this);
    }
}
