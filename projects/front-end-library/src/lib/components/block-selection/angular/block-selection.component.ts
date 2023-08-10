import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBlockSelection, IContentLists, ILink, ITotalPrice } from './api.model';

@Component({
    selector: 'bf-block-selection',
    templateUrl: './block-selection.component.html',
})
export class BlockSelectionComponent implements IBlockSelection, OnInit {
    constructor() {}

    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on the block main element.
     */
    @Input() class: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - List of items content separated by a line.
     * - See `IContentLists`
     *    <a href="/?path=/docs/components-block-selection-api--page#icontentlists-api" target="_blank">API</a>
     *    and <a href="/?path=/docs/components-block-selection-api--page#icontentlists-format" target="_blank">expected format</a>.
     */
    @Input() contentLists: IContentLists[];
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * If `true`, on mobile resolution, the content will be collapsable.
     */
    @Input() isCollapsableOnMobile: boolean = false;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - If `true`, on mobile resolution, the content will be collapsed by default.
     * - Only works if `isCollapsableOnMobile` is `true`.
     */
    @Input() isCollapsedByDefaultOnMobile: boolean = false;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It displays at the top of the component.
     * - If `isCollapsableOnMobile` is `true`, then it will be the button's label
         on mobile resolution.
     */
    @Input() title: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * This is the HTML tag used for `title`.
     */
    @Input() titleTag: string = 'h1';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * It displays on the right of `title`.
     * - See `ILink`
     *    <a href="/?path=/docs/components-block-selection-api--page#ilink-api" target="_blank">API</a>
     *    and <a href="/?path=/docs/components-block-selection-api--page#ilink-format" target="_blank">expected format</a>.
     */
    @Input() topLink: ILink;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It displays in the footer of the component.
     * - See `ITotalPrice`
     *    <a href="/?path=/docs/components-block-selection-api--page#itotalprice-api" target="_blank">API</a>
     *    and <a href="/?path=/docs/components-block-selection-api--page#itotalprice-format" target="_blank">expected format</a>.
     */
    @Input() totalPrice: ITotalPrice;

    ngOnInit() {
        console.log('block selection', this);
    }
}
