export interface ISelectionTile {
    type: 'checkbox' | 'radio';
    id: string;
    name: string;
    value: string;
    isCheked: boolean;
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

    extraAttribute: string;
    reversed: boolean;
    class: string;
}
