import { IButtonIcon } from '../../button-icon/angular/api.model';

export interface IButtonSubmit {
    buttonIcon: IButtonIcon;
    isVisible: boolean;
    position: 'left' | 'right';
}

export interface IInput {
    class: string;
    extraAttribute: string;
    id: string;
    name: string;
    placeholder: string;
    value: string;
}

export interface ILabel {
    class: string;
    extraAttribute: string;
    text: string;
}
