import { Component, Input } from '@angular/core';
import { IChannelsData } from './api.model';

@Component({
    selector: '',
})
export class ChannelsDataAPI implements IChannelsData {
    /** <span style="color: red;">__Required__</span> */
    @Input() imageSrc: string;
    /** <span style="color: red;">__Required__</span> */
    @Input() name: string;
}
