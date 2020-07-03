import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter, SecurityContext} from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: "twig-container",
  templateUrl: './twig-container.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})
export class TwigContainerComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}

  private iframeUrl: SafeResourceUrl;

  private componentName: string;

  ngOnInit() {
    console.log('ngOnInit', this);
  }

  ngOnChanges() {
    console.log('ngOnChanges', this);
    const props = this;
    const paramsString = Object.keys(props).map(function(key) {
        // console.log('key', key);
        if (key !== 'sanitizer' && key !== 'iframeUrl' && key !== 'componentName')
            return key + '=' + props[key];
    }).join('&');
    const url = "http://localhost:3001/" + this.componentName + "?" + paramsString;
    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
