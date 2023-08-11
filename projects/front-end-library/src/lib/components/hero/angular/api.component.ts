import { Component, Input } from '@angular/core';
import { IHeroImage } from './api.model';

@Component({
    selector: '',
})
export class ImageAPI implements IHeroImage {
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * Alternate text of the image.
     */
    @Input() alt: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Only works if the is a `lg` image source.
     * - If `true`, the image will be displayed on the right side of the hero on desktop resolution.
     */
    @Input() isSplitted: boolean;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * - This is the __large__ image source path.
     * - It is required if you want an image on desktop resolution.
     * - Used as a `background-image` or if `isSplitted` is `true`,
         it will be displayed on the right side of the hero.
     *
     * @required
     */
    @Input() lg: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - This is the __medium__ image source path.
     * - This image will be displayed on tablet resolution between `576px` and `992px`.
     * - This image is for a better image quality than `sm` between these resolutions.
     */
    @Input() md: string;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * - This is the __small__ image source path.
     * - It is required if you want an image in mobile and tablet resolutions.
     *
     * @required
     */
    @Input() sm: string;
}
