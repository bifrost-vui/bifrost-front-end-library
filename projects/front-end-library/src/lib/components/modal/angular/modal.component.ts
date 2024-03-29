import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bf-modal',
    templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
    constructor() {}

    @Input() id: string;
    @Input() modalSize: 'sm' | 'md' | 'lg';
    @Input() modalAnimation: string;
    @Input() modalLabelledBy: string;
    @Input() modalTheme: string;

    @Input() bgImage: string;
    @Input() bgLgImage: string;
    @Input() bgMdImage: string;
    @Input() modal_header: string | 'TwigBlock';
    @Input() modalTitle: string;
    @Input() modalSubtitle: string;

    /** Content section takes as much height as it needs. */
    @Input() modal_body_subcontainer: string | 'TwigBlock';
    /** Content section has a maximum height so it becomes scrollable. */
    @Input() modal_body_scroll_container: string | 'TwigBlock';
    @Input() modalBudy: string;

    @Input() modal_footer: string | 'TwigBlock';

    /** Twig only. */
    @Input() class: string;
    @Input() modalContentCLass: string;
    @Input() modalHeaderClass: string;
    @Input() modalBodyClass: string;

    @Input() extraAttribute: string;
    @Input() extraAttributeCloseButton: string;

    ngOnInit() {
        console.log('Modal', this);
    }
}
