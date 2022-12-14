import { ILink } from '../../link/angular/api.model';

export interface IFooter {
    description: HTMLElement;
    link: ILink;
    iconName: string;
    image: {
        src: string;
        alt: string;
    };
}

export interface ISelectionTile {
    type: 'checkbox' | 'radio';
    id: string;
    name: string;
    value: string;
    isChecked: boolean;
    label: string;
    description: string;
    info: string;
    image: object;
    iconName: string;
    isRequired: boolean;
    isDisabled: boolean;
    isInvalid: boolean;
    errorMessage: string;
    ariaLabel: string;
    orientation: 'horizontal' | 'vertical';
    fit: 'content' | 'container';
    content: string | 'TwigBlock';
    footer: IFooter;
    extraAttribute: string;
    class: string;
}
