import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bf-input',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        console.log('Input', this);
    }
}
