import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';
import { Router, UrlSerializer } from '@angular/router';

@Component({
  selector: "twig-container",
  templateUrl: './twig-container.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})
export class TwigContainerComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}

  @Input() iframeUrl: string;

  ngOnInit() {
    console.log('ngOnInit', this);
  }

  ngOnChanges() {
    console.log('ngOnChanges', this);
    const props = this;
    const paramsString = Object.keys(props).map(function(key) {
        console.log('key', key);
        if (key !== 'sanitizer' && key !== 'iframeUrl')
            return key + '=' + props[key];
    }).join('&');
    const url = 'http://localhost:3001/button?' + paramsString;
    this.iframeUrl = url;
    // this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
