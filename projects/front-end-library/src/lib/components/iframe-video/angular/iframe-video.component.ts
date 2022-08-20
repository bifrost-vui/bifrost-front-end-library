import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-iframe-video',
    templateUrl: './iframe-video.component.html',
})

export class IframeVideoComponent implements OnInit {
    constructor() {}

    @Input() videoSource: string;
    @Input() videoRatio: '21by9' | '16by9' | '4by3' | '1by1';
    @Input() iframeClass: string;
    @Input() class: string;

    ngOnInit() {
        console.log('IframeVideo', this);
    }
}