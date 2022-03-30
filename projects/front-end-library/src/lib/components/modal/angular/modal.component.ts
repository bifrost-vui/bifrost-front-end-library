import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'bf-modal',
    templateUrl: './modal.component.html',
})

export class ModalComponent implements OnInit {
    constructor() {
    }

    @Input() id: string;
    @Input() modalId: string;
    @Input() modalSize: 'sm' | 'md' | 'lg';
    @Input() modalAnimation: string;
    @Input() modalLabelledBy: string;
    @Input() extraAttribute:string;
    @Input() modalTheme:string;
    @Input() bgImage: string;
    @Input() bgLgImage: string;
    @Input() bgMdImage: string;

    @Input() modal_header: string | 'TwigBlock';
    @Input() modalHeaderClass: string;
    @Input() modalTitle: string;
    @Input() modalSubtitle: string;
    @Input() modalContentCLass: string;

    /** The Modal content takes full height */
    @Input() modal_body_subcontainer: string | 'TwigBlock';
    /** Makes the content of the modal scrollable */
    @Input() modal_body_scroll_container: string | 'TwigBlock';
    @Input() modalBudy: string;
    @Input() modal_footer: string | 'TwigBlock';
    /**Twig only*/
    @Input() class: string;

    ngOnInit() {
        console.log('Modal', this);
    }
}
