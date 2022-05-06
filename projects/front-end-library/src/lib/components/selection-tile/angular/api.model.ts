export interface ISelectionTile {
    class: string;
    type: 'checkbox' | 'radio';
    inputId: string;
    value: string;
    ariaLabel: string;
    name: string;
    extraAttribute: string
    orientation: 'horizontal' | 'vertical';
    fit: 'content' | 'container';
    title: string;
    description: string;
    info: string;
    image: object;
    iconName: string;
    reversed: boolean;
    isDisabled: boolean;
    isSelected: boolean;
    isInvalid: boolean;
    errorMessage: string;
    isRequired: boolean;
    content: string | 'TwigBlock';
}
