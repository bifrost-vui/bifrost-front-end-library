import { Component, Input } from '@angular/core';
import { IContentLists, ILink, ITotalPrice } from './api.model';

@Component({
    selector: '',
})
export class ContentListsAPI implements IContentLists {
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It displays a button with a "garbage bin" icon.
     * - This button takes only the `href` prop in its object,
         so no need for the `label` prop.
     * - If a `link` is provided, `btnDelete` won't show up.
     */
    @Input() btnDelete: ILink;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It displays a button with a "pencil" icon.
     * - This button takes only the `href` prop in its object,
         so no need for the `label` prop.
     * - If a `link` is provided, `btnModify` won't show up.
     */
    @Input() btnModify: ILink;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Short description of the item.
     * - It displays below `title`.
     */
    @Input() description: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Full price of the item.
     * - It displays a price with a strike through it on the right side
         of the item content, below `price` and `priceInfo`.
     * - If `saving` is not defined, it won't show up.
     * - If a `link` is provided, `fullPrice` won't show up.
     */
    @Input() fullPrice: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It displays a link on the right side of the item content.
     * - If a `link` is provided, `btnDelete`, `btnModify`, `fullPrice`,
         `price`, `priceInfo`, `saving` won't show up.
     */
    @Input() link: ILink;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It displays a price on the right side of the item content,
         below `btnDelete` and `btnModify`.
     * - If a `link` is provided, `price` won't show up.
     */
    @Input() price: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It displays a text string just after `price`.
     * - If a `link` is provided, `priceInfo` won't show up.
     */
    @Input() priceInfo: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It displays a price in a yellow box on the right side
         of the item content, below `price` and `priceInfo`.
     * - If a `link` is provided, `saving` won't show up.
     */
    @Input() saving: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Title of item.
     * - It displays a title on the left side
         of the item content, above `description`.
     */
    @Input() title: string;
}

@Component({
    selector: '',
})
export class LinkAPI implements ILink {
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * URL of the link.
     *
     * @required
     */
    @Input() href: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Text string of the link.
     */
    @Input() label: string;
}

@Component({
    selector: '',
})
export class TotalPriceAPI implements ITotalPrice {
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * Details / description, it displays on the left side below the `label`.
     *
     * @required
     */
    @Input() details: string;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * Title of the footer zone, it display on the left side above `details`.
     *
     * @required
     */
    @Input() label: string;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * It displays a price on the right side of the footer zone.
     *
     * @required
     */
    @Input() price: string;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * It displays details on the right side of the footer zone, below `price` and `priceInfo`.
     *
     * @required
     */
    @Input() priceDetails: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * It displays a text string just after `price`.
     */
    @Input() priceInfo: string;
}
