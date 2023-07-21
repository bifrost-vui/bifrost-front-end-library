import { Component, Input } from '@angular/core';
import { IContent, IContentLists, IDetailsColors, IImage, ILink, ITitle } from './api.model';

@Component({
    selector: '',
})
export class ContentAPI implements IContent {
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * See [Icons - Illustration List](/?path=/story/components-icon--drupal-illustration) for icon names.
     */
    @Input() icon: string;
    /**
     * <span style="color: red;">__Required__</span>
     *
     * @required
     */
    @Input() label: string;
}

@Component({
    selector: '',
})
export class ContentListsAPI implements IContentLists {
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * See IContent <a href="#icontent-api" target="_self">API</a>
     *  and <a href="#icontent-format" target="_self">expected format</a>.
     *
     * @required
     */
    @Input() content: IContent[];
    /**
     * <span style="color: red;">__Required__</span>
     *
     * @required
     */
    @Input() description: string;
    /**
     * <span style="color: red;">__Required__</span>
     *
     * @required
     */
    @Input() title: string;
}

@Component({
    selector: '',
})
export class DetailsColorsAPI implements IDetailsColors {
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * Name of the color.
     *
     * @required
     */
    @Input() name: string;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * Hexadecimal code of the color, without the `#`.
     *
     * @required
     */
    @Input() value: string;
}

@Component({
    selector: '',
})
export class ImageAPI implements IImage {
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * Alternative text of the image.
     *
     * @required
     */
    @Input() alt: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * See [Icons - Illustration List](/?path=/story/components-icon--drupal-illustration) for icon names.
     */
    @Input() badgeIconName: string;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * Source path of the image.
     *
     * @required
     */
    @Input() src: string;
}

@Component({
    selector: '',
})
export class LinkAPI implements ILink {
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on the link element.
     */
    @Input() class: string;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * URL of the link.
     *
     * @required
     */
    @Input() href: string;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * Text string of the link.
     *
     * @required
     */
    @Input() label: string;
}

@Component({
    selector: '',
})
export class TitleAPI implements ITitle {
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Above the main title.
     */
    @Input() category: string;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * Main title for the card.
     *
     * @required
     */
    @Input() detail: string;
}
