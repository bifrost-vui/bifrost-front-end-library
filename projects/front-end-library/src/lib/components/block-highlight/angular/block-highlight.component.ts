import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IButton, IImage } from './api.model';

@Component({
    selector: 'bf-block-highlight',
    templateUrl: './block-highlight.component.html',
})
export class BlockHighlightComponent implements OnInit {
    constructor() {}

    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Background color of the block.
     */
    @Input() blockBackgroundColor: 'ground' | 'underground';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It displays a link button under `paragraph`.
     * - It uses the `Button` component, but its properties are limited.
     * - See `IButton`
     *    <a href="/?path=/docs/components-block-highlight-api--page#ibutton-api" target="_blank">API</a>
     *    and <a href="/?path=/docs/components-block-highlight-api--page#ibutton-format" target="_blank">expected format</a>.
     */
    @Input() button: IButton;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on the block main element.
     */
    @Input() class: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It displays an image on the left side of the block and on top on mobile resolution.
     * - As of release `1.14.3`, the object only requires the path to the image.
     * - See `IImage`
     *    <a href="/?path=/docs/components-block-highlight-api--page#iimage-api" target="_blank">API</a>
     *    and <a href="/?path=/docs/components-block-highlight-api--page#iimage-format" target="_blank">expected format</a>.
     */
    @Input() image: IImage;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - When the value is `true`:
     *   - the CSS `min-height` value of the block is higher.
     *   - the content is vertically centered.
     *   - the title has a style of a `h2` instead of a `h3`.
     *   - the button's `hierarchy` property is `primary-alt` instead of `secondary`.
     */
    @Input() isFeatured: boolean = false;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - When the value is `true`:
     *   - the background-color of the block turns to black.
     *   - the text color turns to white.
     */
    @Input() isReversed: boolean = false;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - When the value is `true`, the image will fill up its entire container's width.
     */
    @Input() isVisualBackgroundFill: boolean = true;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It displays the text of the block's content.
     * - It is an `HTMLElement`, so wrap your data with a semantic HTML tag,
     *     example: `"<p>Find the perfect accessories for your device.</p>"`.
     */
    @Input() paragraph: HTMLElement;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * It displays the title of the block's content.
     */
    @Input() title: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * By default, a `<h2>` tag is used for `title`, but it can be changed with this prop.
     */
    @Input() titleTag: string = 'h2';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It will change the `background-color` behind `image`.
     * - The string needs to be a color name or an hexadecimal color code (ex.: #F6F6F6).
     * - In Storybook, there is an issue with the `#` character, so it breaks the rendering of the component.
         To test this property, use a color name like `red`, `blue`, `yellow`, `black`, etc.
     */
    @Input() visualBackgroundColor: string;

    ngOnInit() {
        console.log('block highlight', this);
    }
}
