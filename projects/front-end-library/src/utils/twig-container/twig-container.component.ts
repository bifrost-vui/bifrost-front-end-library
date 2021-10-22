import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter, SecurityContext, SimpleChange} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { isDevMode } from '@angular/core';
import {parse, stringify, toJSON, fromJSON} from 'flatted';

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

  private iframeUrl     : SafeResourceUrl;
  private elementPath   : string;
  private props         : object;

  ngOnInit() {
    console.log('ngOnInit', this);
    console.log('montreal')
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  updateIframeUrl(props) {
    const params:string[] = Object.keys(props).filter(key => !['__ngContext__', 'iframeUrl', 'sanitizer'].includes(key));
    const paramsString:string = params.map(function(key) {
      console.log('updateIframeUrl', key);
      if ( !['iframeUrl', 'sanitizer'].includes(key) && props[key] !== undefined )
      {
        const value = (['object'].includes(typeof props[key])) ? JSON.stringify(props[key]) : props[key];
        if (value !== '')
        {
          return key + '=' + value;
        }
      }
    }).join('&');
    const baseURL = isDevMode() ? 'http://localhost:3001/' : '/'
    const url = baseURL + 'api/twig?' + paramsString;
    console.log('url', url);
    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngDoCheck() {
    console.log('ngDoCheck', this);
    const newProps = {...this};
    delete newProps.props;
    delete newProps.sanitizer;
    delete newProps.iframeUrl;

    // if (this.elementPath && this.elementPath.length && newProps !== this.props)
    if (this.elementPath && this.elementPath.length)
    {
    //     this.props = newProps;
        this.updateIframeUrl(newProps);
    }
  }

  ngAfterViewInit() {
    console.log('fatou')
  }
}
