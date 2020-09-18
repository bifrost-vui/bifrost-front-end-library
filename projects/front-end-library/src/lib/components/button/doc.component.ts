import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: "doc-button",
  template: `
    <p>
        <bf-button [label]='label' [color]='color' [disabled]='disabled'></bf-button>
        <bf-button [label]='label' [color]='color' [disabled]='disabled'></bf-button>
        <bf-button [label]='label' [color]='color' [disabled]='disabled'></bf-button>
    </p>
  `,
})
export class docButtonComponent implements OnInit {
  constructor() {}

    ngOnInit() {
        console.log('docButtonComponent', this);
    }
}
