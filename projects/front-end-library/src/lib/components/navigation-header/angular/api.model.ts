/* Import */
import { ILogo } from '../../../components/logo/angular/api.model';

export interface IAccount {
    firstName: string;
    lastName: string;
    links: IAccountLink[];
}

export interface IAccountLink {
    href: string;
    icon: string;
    subtitle?: string;
    title: string;
}

export interface IDefaultMenuItem {
    class?: string;
    href?: string;
    isActive?: boolean;
    isActiveLinkClickable?: boolean;
    label: string;
    rel?: string;
    unclickableActiveMenuItemScreenReaderMessage?: string;
}

export interface IHeaderLogo {
    href: string;
    name: ILogo['name'];
}

export interface IMenuItem extends IDefaultMenuItem {
    color?: string;
    subItems?: IMenuItem[];
}

export interface ITopBar {
    left?: ITopBarSection;
    right?: ITopBarSection;
}

export interface ITopBarMenuItem extends IDefaultMenuItem {}

export interface ITopBarSection {
    description?: string;
    items: ITopBarMenuItem[];
}
