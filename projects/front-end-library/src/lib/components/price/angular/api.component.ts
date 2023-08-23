import { Component, Input } from '@angular/core';
import { IPromotion, ISize, IUpfront } from './api.model';

@Component({
    selector: '',
})
export class PromotionAPI implements IPromotion {
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * This is the direction of the promotion block. If you choose `vertical`,
       the block will be displayed __beside__ the main price, but if you choose
       `horizontal`, the block will be displayed __below__ the main price.
     */
    @Input() direction: 'vertical' | 'horizontal' = 'vertical';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * If `false`, the yellow box of the promotion block will not be displayed.
     */
    @Input() isDisplayed: boolean;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * It displays a price in the yellow box of the promotion block.
     */
    @Input() priceSaved: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * It displays a crossed out price before the yellow box of the promotion block.
     */
    @Input() priceStriked: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * It displays a text before `priceSaved` in the yellow box of the promotion block.
     */
    @Input() savedLabel: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * It displays a superscript text after `priceSaved` in the yellow box of the promotion block.
     */
    @Input() superscript: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * It displays a title in the promotion block, above `priceStriked` and the yellow box.
     */
    @Input() title: string;
}

@Component({
    selector: '',
})
export class SizeAPI implements ISize {
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * Default size of the `price` component.
     *
     * @required
     */
    @Input() default: 'small' | 'medium' | 'large' = 'small';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Size of the `price` component at the `small` breakpoint.
     */
    @Input() sm: 'small' | 'medium' | 'large';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Size of the `price` component at the `medium` breakpoint.
     */
    @Input() md: 'small' | 'medium' | 'large';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Size of the `price` component at the `large` breakpoint.
     */
    @Input() lg: 'small' | 'medium' | 'large';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Size of the `price` component at the `x-large` breakpoint.
     */
    @Input() xl: 'small' | 'medium' | 'large';
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Size of the `price` component at the `xx-large` breakpoint.
     */
    @Input() xxl: 'small' | 'medium' | 'large';
}

@Component({
    selector: '',
})
export class UpfrontAPI implements IUpfront {
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * It displays a price in dollar before `label` in the upfront block.
     */
    @Input() dollar: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * It displays a text after `dollar` in the upfront block.
     */
    @Input() label: string;
}
