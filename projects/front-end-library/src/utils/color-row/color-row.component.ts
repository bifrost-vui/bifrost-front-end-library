import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'color-row',
  templateUrl: './color-row.html',
})
export class ColorRowComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    console.log('ngOnInit', this);
  }

  ngOnChanges() {
  }
}
