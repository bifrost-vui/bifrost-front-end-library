import { Component, Input } from '@angular/core';
import { IChipDeleteButton } from './api.model';

@Component({
    selector: '',
})
export class ChipDeleteButton implements IChipDeleteButton {
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * JavaScript function or code to execute when the event is triggerred.
     *
     * @required
     */
    @Input() codeTriggered: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * - Mouse event to use as the button's HTML attribute.
     * - Example: `click` will be `onclick`, `mousedown` will be `onmousedown`, etc.
     * - Default event is `click`, so if no `eventType` is chosen, the event will be `click`.
     */
    @Input() eventType: 'click' | 'mousedown' | 'mouseout' | 'mouseover' | 'mouseup' = 'click';
}
