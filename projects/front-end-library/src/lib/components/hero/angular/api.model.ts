import { IBadge } from '../../badge/angular/api.model';
import { IBlockSelection } from '../../block-selection/angular/api.model';
import { IButton } from '../../button/angular/api.model';
import { IIcon } from '../../icon/angular/api.model';
import { IPrice } from '../../price/angular/api.model';

export interface IHero {
    background?: 'ground' | 'underground' | 'highlight';
    badge?: IBadge;
    blockSelection?: IBlockSelection | 'TwigBlock';
    breadcrumb?: HTMLElement | 'TwigBlock';
    buttons?: IButton[];
    class?: string;
    content?: HTMLElement | 'TwigBlock';
    customBgColor?: string;
    customFontColor?: string;
    description?: string | HTMLElement;
    height?: 'automatic' | 'large';
    icon?: string | IIcon;
    image?: IHeroImage;
    language?: 'en' | 'fr'; // Deprecated: Use price.language instead.
    price?: IPrice;
    reversed?: boolean;
    subtitle?: string;
    title?: string;
    upperTitle?: string;
}

export interface IHeroImage {
    alt?: string;
    isSplitted?: boolean;
    lg: string;
    md?: string;
    sm: string;
}
