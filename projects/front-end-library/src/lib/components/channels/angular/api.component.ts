import { Component, Input } from '@angular/core';
import { IChannelsData } from './api.model';

@Component({
    selector: '',
})
export class ChannelsDataAPI implements IChannelsData {
    /**
     * <span style="color: red;">__Required__</span>
     *
     * @required
     */
    @Input() imageSrc: string;
    /**
     * <span style="color: red;">__Required__</span>
     *
     * @required
     */
    @Input() name: string;
}
