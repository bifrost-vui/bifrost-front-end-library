export interface IBadge {
    iconName: string;
    label: string;
}

export interface IButton {
    hierarchy: string;
    href: string;
    label: string;
    reverse: boolean;
}

export interface IImage {
    alt: string;
    badgeIconName: string;
    script: string;
}

export interface IInputIncrement {
    ariaLabel: string;
    class: string;
    errorMessage: string;
    inputId: string;
    isDisabled: boolean;
    isReadOnly: boolean;
    max: number;
    min: number;
    value: number;
}

export interface ILink {
    class: string;
    href: string;
    label: string;
}
