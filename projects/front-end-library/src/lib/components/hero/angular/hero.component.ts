import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { IPrice } from '../../price/angular/api.model';
import { IBadge } from '../../badge/angular/api.model';
import { IBlockSelection } from '../../block-selection/angular/api.model';
import { IButton } from '../../button/angular/api.model';
import { IIcon } from '../../icon/angular/api.model';
import { IHero, IHeroImage } from './api.model';

@Component({
    selector: 'bf-hero',
    templateUrl: './hero.component.html',
})
export class HeroComponent implements IHero, OnInit {
    constructor() {}

    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Background color of the hero.
     */
    @Input() background: 'ground' | 'underground' | 'highlight' = 'underground';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - This badge displays between the `breadcrumb` and the `upperTitle`.
     * - See Badge Component [API](/?path=/docs/components-badge--drupal#component-api).
     */
    @Input() badge: IBadge;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Does not work if there is an `image` and `image.isSplitted: true`.
     * - It displays on the right side of the hero banner.
     * - It uses the `Block Selection` component or you can pass
         your own content with `blockSelection` Twig block.
     * - If you use the `Block Selection` component,
         see its [API](/?path=/docs/components-block-selection--drupal#component-api).
     */
    @Input() blockSelection: IBlockSelection | 'TwigBlock';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It displays at the top of the component on the left side.
     * - You can pass your own HTML code directly with the `breadcrumb` prop
         or you can pass it through the `breadcrumb` Twig block.
     */
    @Input() breadcrumb: HTMLElement | 'TwigBlock';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It displays at the bottom of the component on the left side.
     * - You can insert a maximum of 2 buttons.
     * - See Button Component [API](/?path=/docs/components-button--drupal#component-api).
     */
    @Input() buttons: IButton[];
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Custom classes on the hero main element.
     */
    @Input() class: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It displays at the bottom of the component between the `description` and the `buttons`.
     * - You can pass your own HTML code directly with the `content` prop
         or you can pass it through the `content` Twig block.
     */
    @Input() content: HTMLElement | 'TwigBlock';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * It displays between the `subtitle` and the `description`.
     */
    @Input() description: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Height prop to `large` will add a min-height of 60vh.
     */
    @Input() height: 'automatic' | 'large';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It displays a huge icon on the right side of the hero.
     * - The `icon.size` is always overrided with the value `huge`.
     * - Two methods available:
     *   - you can pass directly the `name` of the icon as a `string`
     *   - or you can use the Icon Component [API](/?path=/docs/components-icon--drupal#component-api).
     */
    @Input() icon: string | IIcon;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It displays an image at the top of the component on mobile and tablet resolution
         and in the background of the component on desktop resolution.
     * - If `isSplitted` value is `true` and the `lg` format is provided, instead of being
         in the background of the component on desktop resolution, it will be displayed on the right side.
     * - See `IHeroImage`
     *    <a href="/?path=/docs/components-hero-api--page#iheroimage-api" target="_blank">API</a>
     *    and <a href="/?path=/docs/components-hero-api--page#iheroimage-format" target="_blank">expected format</a>.
     */
    @Input() image: IHeroImage;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It displays between the `content` and the `buttons`.
     * - See Price Component [API](/?path=/docs/components-price--drupal#component-api).
     */
    @Input() price: IPrice;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - It reverses the `background` and the text color if the prop is set as `true`.
     * - It won't work if `customBgColor` and `customFontColor` are provided.
     */
    @Input() reversed: boolean = false;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * It displays between the `title` and the `description`.
     */
    @Input() subtitle: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * It displays between the `upperTitle` and the `subtitle`.
     */
    @Input() title: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * It displays between the `badge` and the `title`.
     */
    @Input() upperTitle: string;

    /**
     * __\*Deprecated\*__
     *
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Use `price.language` instead
     * - If `price.language` is not provided, it will use this prop instead.
     */
    @Input() language: 'en' | 'fr' = 'en';

    ngOnInit() {
        console.log('Hero', this);
    }
}
