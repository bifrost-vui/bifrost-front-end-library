import { Component, Input } from '@angular/core';
import { INavItems } from './api.model';

@Component({
    selector: '',
})
export class NavItemsAPI implements INavItems {
    /**
     * <span style="color: orange;">__Optional__</span>: Unneeded on Tab-like Nav
     * <br>
     * <span style="color: red;">__Required__</span>: Real tab functionality
     * <br><br>
     * - `aria-controls` is an accessibility attribute.
     * - It is used by screen reader to know which element this tab is controlling.
     * - It will normally be the same as the `id` of the targeted element.
     */
    @Input() ariaControls: string;
    /**
     * <span style="color: orange;">__Optional__</span>: Unneeded on Tab-like Nav
     * <br>
     * <span style="color: red;">__Required__</span>: Real tab functionality
     * <br><br>
     * - `aria-selected` is an accessibility attribute.
     * - It is used by screen reader to know if the targeted element is active.
     * - It is not a `boolean` type, because the value has to be a `string` since it is an HTML attribute value.
     */
    @Input() ariaSelected: 'true' | 'false' = 'false';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on the tab item.
     */
    @Input() class: string;
    /**
     * <span style="color: orange;">__Optional__</span>: Unneeded on Tab-like Nav
     * <br>
     * <span style="color: red;">__Required__</span>: Real tab functionality
     * <br><br>
     * - `data-target` is an attribute used for JavaScript to know which element to open/target when this tab is clicked on.
     * - It will normally be the same as the `id` of the targeted element, but with a `#` in front of it.
     */
    @Input() dataTarget: string;
    /**
     * <span style="color: orange;">__Optional__</span>: Unneeded on Tab-like Nav
     * <br>
     * <span style="color: red;">__Required__</span>: Real tab functionality
     * <br><br>
     * - Extra attributes on the tab item.
     * - It can be a `string` of attributes: `'data-test="value" data-test2="value2"'`
     * - Or it can be an object of attributes name and their values, example:
     *
     * <pre>
     *     <code>
     *        {
     *          "data-example-1": "exampleValue-1",
     *          "data-example-2": "exampleValue-2",
     *        }
     *     </code>
     * </pre>
     */
    @Input() extraAttribute: string | object;
    /**
     * <span style="color: red;">__Required__</span>: Tab-like Nav
     * <br>
     * <span style="color: orange;">__Optional__</span>: Unneeded on Real tab functionality
     * <br><br>
     * - URL of the link.
     * - Only needed when the component is used as a tab-like navigation.
     */
    @Input() href: string;
    /**
     * <span style="color: orange;">__Optional__</span>: Unneeded on Tab-like Nav
     * <br>
     * <span style="color: red;">__Required__</span>: Real tab functionality
     * <br><br>
     * Id attribute of the tab item.
     */
    @Input() id: string;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * Label of the tab item.
     *
     * @required
     */
    @Input() label: string;
}
