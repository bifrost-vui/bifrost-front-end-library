import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter, SecurityContext, SimpleChange} from '@angular/core';
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

  private elementPath: string;

  private props: object;

  ngOnInit() {
    console.log('ngOnInit', this);
  }

  ngOnChanges(changes:SimpleChange) {
    console.log('ngOnChanges', this, changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck', this, this.props);
    
    const newProps = {...this};
    delete newProps.props;
    delete newProps.sanitizer;
    delete newProps.iframeUrl;

    if (this.elementPath && this.elementPath.length && newProps !== this.props)
    {
        this.props = newProps;
        this.updateIframeUrl(newProps);
    }
  }

  updateIframeUrl(props) {
    const paramsString = Object.keys(props).map(function(key) {
        console.log('updateIframeUrl', key);
        if (key !== 'sanitizer' && key !== 'iframeUrl') {
            const value = (['object'].includes(typeof props[key])) ? JSON.stringify(props[key]) : props[key];
            if (value !== '') {
                return key + '=' + value;
            }
        }
    }).join('&');
    
    const baseURL = isDevMode() ? 'http://localhost:3001/' : '/'
    const url = baseURL + 'api/twig?' + paramsString;
    
    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
