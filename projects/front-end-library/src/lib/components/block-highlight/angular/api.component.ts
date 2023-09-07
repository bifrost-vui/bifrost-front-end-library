import { Component, Input } from '@angular/core';
import { IButton, IImage } from './api.model';

@Component({
    selector: '',
})
export class ButtonAPI implements IButton {
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * This is the `href` of the button link.
     *
     * @required
     */
    @Input() href: string;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * This is the text on the button link.
     *
     * @required
     */
    @Input() label: string;
}

@Component({
    selector: '',
})
export class ImageAPI implements IImage {
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * This is the `src` attribute of the image.
     *
     * @required
     */
    @Input() src: string;
}
