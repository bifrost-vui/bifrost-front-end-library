export interface IButtonNav {
    href           : string;
    label          : string;
    description    : string;
    iconName       : string;
    isFeatured     : boolean;
    isDisabled     : boolean;

    dataDismiss    : string;
    dataToggle     : string;
    dataTarget     : string;
    ariaControls   : string;
    ariaExpanded   : string;
    ariaLabel      : string;
    extraAttribute : string;

    class          : string;
    reversed       : boolean;
    highlight      : boolean;
}
