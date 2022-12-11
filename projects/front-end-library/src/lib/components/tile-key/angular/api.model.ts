import { IIcon } from '../../icon/angular/api.model';

export interface IImage {
    src: string;
    textColor: 'light' | 'dark';
}

export interface ITileKey {
    isClickable: boolean;
    href: string;
    title: string;
    titleTag: string;
    description: string;
    linkLabel: string;
    icon: IIcon;
    backgroundImage: IImage;
    backgroundColor: 'ground' | 'underground' | 'highlight';
    class: string;
    reversed: boolean;
}
