import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter, SecurityContext} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { isDevMode } from '@angular/core';

@Component({
  selector: 'twig-container',
  templateUrl: './twig-container.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})
export class TwigContainerComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {
      console.log('isDevMode', isDevMode());
  }

  private iframeUrl: SafeResourceUrl;

  private component: string;

  ngOnInit() {
    console.log('ngOnInit', this);
  }

  ngOnChanges() {
    console.log('ngOnChanges', this);
    const props = this;
    const paramsString = Object.keys(props).map(function(key) {
        console.log('key', key, props[key]);
        if (key !== 'sanitizer' && key !== 'iframeUrl') {
            // const value = (typeof props[key] === 'object') ? JSON.stringify(props[key]) : props[key];
            const value = props[key];
            if (value !== '') {
                return key + '=' + value;
            }
        }
    }).join('&');
    const baseURL = isDevMode() ? 'http://localhost:3001/' : '/'
    const url = baseURL + 'api/twig?' + paramsString;
    console.log('url', url);
    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
