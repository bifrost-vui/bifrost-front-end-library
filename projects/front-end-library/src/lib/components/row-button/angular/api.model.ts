export interface IImage {
    src: string;
    dataSrc: string;
    alt: string;
}

export interface IRowButton {
    href: string;
    title: string;
    titleTag: string;
    paragraph: string;
    linkLabel: string;

    image: IImage;
    iconName: string;
    hasChevron: boolean;
    size: 'small' | 'medium' | 'large';

    dataDismiss: string;
    dataToggle: string;
    dataTarget: string;
    ariaControls: string;
    ariaLabel: string;
    extraAttribute: string | object;

    class: string;
    reversed: boolean;
}
