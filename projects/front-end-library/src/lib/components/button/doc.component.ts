import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: "doc-button",
  template: `
    <main class='d-flex flex-column' style='width: 100vw; height: 100vh'>
        <div class='d-flex flex-column justify-content-end flex-grow-1 pb-3'>
            <div class='row justify-content-md-center'>
                <bf-button styleClass='m-2' color='primary'> Primary </bf-button>
                <bf-button styleClass='m-2' color='primary-alt'> Primary Alt </bf-button>
                <bf-button styleClass='m-2' color='secondary'> Secondary </bf-button>
                <bf-button styleClass='m-2' color='tertiary'> Tertiary </bf-button>
                <bf-button styleClass='m-2' variant='csr'> CSR </bf-button>
            </div>
            <div class='row justify-content-md-center'>
                <bf-button styleClass='m-2' color='primary' disabled='disabled'> Primary </bf-button>
                <bf-button styleClass='m-2' color='primary-alt' disabled='disabled'> Primary Alt </bf-button>
                <bf-button styleClass='m-2' color='secondary' disabled='disabled'> Secondary </bf-button>
                <bf-button styleClass='m-2' color='tertiary' disabled='disabled'> Tertiary </bf-button>
                <bf-button styleClass='m-2' variant='csr' disabled='disabled'> CSR </bf-button>
            </div>
        </div>
        <div class='d-flex flex-column justify-content-start flex-grow-1 pt-3 bg-dark'>
            <div class='row justify-content-md-center'>
                <bf-button styleClass='m-2' reversed='reversed' [color]='color || secondary'> Primary </bf-button>
                <bf-button styleClass='m-2' reversed='reversed' color='primary-alt'> Primary Alt </bf-button>
                <bf-button styleClass='m-2' reversed='reversed' color='secondary'> Secondary </bf-button>
                <bf-button styleClass='m-2' reversed='reversed' color='tertiary'> Tertiary </bf-button>
                <bf-button styleClass='m-2' reversed='reversed' variant='csr'> CSR </bf-button>
            </div>
            <div class='row justify-content-md-center'>
                <bf-button styleClass='m-2' reversed='reversed' color='primary' disabled='disabled'> Primary </bf-button>
                <bf-button styleClass='m-2' reversed='reversed' color='primary-alt' disabled='disabled'> Primary Alt </bf-button>
                <bf-button styleClass='m-2' reversed='reversed' color='secondary' disabled='disabled'> Secondary </bf-button>
                <bf-button styleClass='m-2' reversed='reversed' color='tertiary' disabled='disabled'> Tertiary </bf-button>
                <bf-button styleClass='m-2' reversed='reversed' variant='csr' disabled='disabled'> CSR </bf-button>
            </div>
        </div>
    </main>
  `,
})
export class docButtonComponent implements OnInit {
  constructor() {}

    ngOnInit() {
        console.log('docButtonComponent', this);
    }
}
