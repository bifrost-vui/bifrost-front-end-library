export interface IContent {
    icon: string;
    label: string;
}

export interface IContentLists {
    content: IContent[];
    description: string;
    title: string;
}

export interface IDetailsColors {
    name: string;
    value: string;
}

export interface IImage {
    alt: string;
    badgeIconName?: string;
    src: string;
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
    class?: string;
    href: string;
    label: string;
}

export interface ITitle {
    category?: string;
    detail: string;
}
