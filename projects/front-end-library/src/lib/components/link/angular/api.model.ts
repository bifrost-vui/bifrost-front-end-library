export interface ILink {
    label          : string;
    labelClass     : string;
    href           : string;
    hierarchy      : 'native' | 'primary';
    iconName       : string;
    iconPosition   : 'left' | 'right';
    isUnderline    : boolean;
    isDisabled     : boolean;
    title          : string;
    ariaLabel      : string;
    extraAttribute : string;
    rel            : string;

    class          : string;
    reversed       : boolean;
}