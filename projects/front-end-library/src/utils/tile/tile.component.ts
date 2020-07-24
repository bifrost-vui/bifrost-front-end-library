import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tile',
  templateUrl: './tile.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})
export class TileComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    console.log('ngOnInit', this);
  }

  ngOnChanges() {
  }
}
