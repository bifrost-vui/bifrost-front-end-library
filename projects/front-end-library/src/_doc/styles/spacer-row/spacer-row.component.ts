import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'spacer-row',
  templateUrl: './spacer-row.html',
})
export class SpacerRowComponent implements OnInit {
  constructor() {
  }
  
  private label: String;

  ngOnInit() {
    console.log('ngOnInit', this);
  }

  ngOnChanges() {
  }
}
