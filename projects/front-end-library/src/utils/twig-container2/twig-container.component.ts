import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter, SecurityContext} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { isDevMode } from '@angular/core';
import Twig from 'twig';

@Component({
  selector: 'twig-container2',
  templateUrl: './twig-container.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})
export class TwigContainer2Component implements OnInit {
  constructor(private sanitizer: DomSanitizer) {
      console.log('isDevMode', isDevMode());
  }

  ngOnInit() {
    console.log('ngOnInit', this);

    var twig = Twig.twig;
    var template = twig({
        data: 'The {{ baked_good }} is a lie.'
    });

    Twig.renderFile('button.twig', {foo:'bar'}, (err, html) => {
        // html; // compiled string
        console.log('renderFile err', err);
        console.log('renderFile', html);
    });

    console.log(
        template.render({baked_good: 'cupcake'})
    );
  }

  ngOnChanges() {
    console.log('ngOnChanges', this);
    const props = this;
  }
}
