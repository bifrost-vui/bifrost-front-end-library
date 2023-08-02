import { Component, OnInit, Input } from '@angular/core';
import { IChannelsData } from './api.model';

@Component({
    selector: 'bf-channels',
    templateUrl: './channels.component.html',
})
export class ChannelsComponent implements OnInit {
    constructor() {}

    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * See `IChannelsData`
     *  <a href="/?path=/docs/components-channels-api--page#ichannelsdata-api" target="_blank">API</a>
     *  and <a href="/?path=/docs/components-channels-api--page#ichannelsdata-format" target="_blank">expected format</a>.
     *
     * @required
     */
    @Input() channelsData: IChannelsData[];
    /**
     * <span style="color: orange;">__Optional__</span>
     *
     * Angular only.
     *
     * @ignore
     */
    @Input() className: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     *
     * Drupal only.
     */
    @Input() class: string;
    /**
     * <span style="color: red;">__Required__</span>
     *
     * @required
     */
    @Input() size: 'small' | 'medium' | 'large' = 'medium';

    ngOnInit() {
        console.log('Channels', this);
    }
}
