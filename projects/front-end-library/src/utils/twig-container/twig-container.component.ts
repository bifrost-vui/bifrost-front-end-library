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
        // console.log('key', key);
        if (key !== 'sanitizer' && key !== 'iframeUrl')
            return key + '=' + props[key];
    }).join('&');
    const baseURL = isDevMode() ? 'http://localhost:3001/' : '/'
    const url = baseURL + 'api/twig?' + paramsString;
    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
