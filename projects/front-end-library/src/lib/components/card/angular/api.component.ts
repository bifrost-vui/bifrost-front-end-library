import { Component, Input } from '@angular/core';
import {
    IChannels,
    IChannelsFull,
    IChannelsFullTabContent,
    IContent,
    IContentLists,
    IDetailsColors,
    IImage,
    ILink,
    ITitle,
} from './api.model';
import { IChannelsData } from '../../channels/angular/api.model';
import { INavItems } from '../../tab/angular/api.model';

@Component({
    selector: '',
})
export class ChannelsAPI implements IChannels {
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - If it is not empty, in the card below the `limited` `channels` component, a link is displayed to open a `modal`.
     * - This `modal` contains a full list of channels, separated by tabs.
     * - See `IChannelsFull`
     *    <a href="#ichannelsfull-api" target="_self">API</a>
     *    and <a href="#ichannelsfull-format" target="_self">expected format</a>.
     */
    @Input() full: IChannelsFull[];
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * - It is used with a TV __plan__ card.
     * - It displays the `channels` component in the card below a `contentLists` item.
     * - There is no limit how many channel images it can display, but the design in Figma limits it to 5 images.
     * - See `IChannelsData`
     *    <a href="/?path=/docs/components-channels-api--page#ichannels-api" target="_blank">API</a>
     *    and <a href="/?path=/docs/components-channels-api--page#ichannels-format" target="_blank">expected format</a>.
     *
     * @required
     */
    @Input() limited: IChannelsData[];
}

@Component({
    selector: '',
})
export class ChannelsFullAPI implements IChannelsFull {
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * - In the opened `modal`, it contains the data of each tab's content that will be displayed.
     * - See `IChannelsFullTabContent`
     *    <a href="#ichannelsfulltabcontent-api" target="_self">API</a>
     *    and <a href="#ichannelsfulltabcontent-format" target="_self">expected format</a>.
     *
     * @required
     */
    @Input() tabContent: IChannelsFullTabContent;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * - In the opened `modal`, it displays the tabs.
     * - See `INavItems`
     *    <a href="/?path=/docs/components-tab-api--page#inavitems-api" target="_blank">API</a>
     *    and <a href="/?path=/docs/components-tab-api--page#inavitems-format" target="_blank">expected format</a>.
     *
     * @required
     */
    @Input() tabData: INavItems;
}

@Component({
    selector: '',
})
export class ChannelsFullTabContentAPI implements IChannelsFullTabContent {
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * - `aria-labelledby` is an accessibility attribute.
     * - It is used by screen reader to know which element is labelling this element.
     * - It will normally be the same as `tabData.id` in `IChannelsFull`
     *    <a href="#ichannelsfull-api" target="_self">API</a>.
     *
     * @required
     */
    @Input() ariaLabelledby: string;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * - In the opened `modal`, it displays the `channels` component.
     * - See `IChannelsData`
     *    <a href="/?path=/docs/components-channels-api--page#ichannels-api" target="_blank">API</a>
     *    and <a href="/?path=/docs/components-channels-api--page#ichannels-format" target="_blank">expected format</a>.
     *
     * @required
     */
    @Input() channelsList: IChannelsData[];
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on the tab content container.
     */
    @Input() class: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - In the opened `modal`, between the `tab` and the `channels` components, it displays a text.
     * - This text can be a simple string or an HTML element, ex.: `<p>This is a description</p>`.
     */
    @Input() description: string | HTMLElement;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * - It is the tab content's `id` attribute.
     * - It is needed by the tab to know which content to target.
     * - This is the value to use in `IChannelsFull` `tabData.ariaControls` and also in `tabData.href` preceded by a `#` character.
     *
     * @required
     */
    @Input() id: string;
}

@Component({
    selector: '',
})
export class ContentAPI implements IContent {
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * See [Icons - Illustration List](/?path=/story/components-icon--drupal-illustration) for icon names.
     *
     * @required
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
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Only used with a TV __plan__ card.
     * - See `IChannels`
     *    <a href="#ichannels-api" target="_self">API</a>
     *    and <a href="#ichannels-format" target="_self">expected format</a>.
     */
    @Input() channels: IChannels;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * See `IContent`
     *  <a href="#icontent-api" target="_self">API</a>
     *  and <a href="#icontent-format" target="_self">expected format</a>.
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
