import { IIcon } from '../../icon/angular/api.model';

export interface IButtonIcon {
    ariaControls: string;
    ariaExpanded: string;
    ariaLabel: string;
    badgeLabel: string;
    buttonClass: string;
    class: string;
    dataDismiss: string;
    dataTarget: string;
    dataToggle: string;
    extraAttribute: string | object;
    href: string;
    icon: string | IIcon;
    isDisabled: boolean;
    label: string;
}
