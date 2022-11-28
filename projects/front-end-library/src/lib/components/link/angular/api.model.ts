import {Input} from "@angular/core";

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
    dataDismiss    : string;
    dataToggle     : string;
    dataTarget     : string;
    class          : string;
    reversed       : boolean;
}