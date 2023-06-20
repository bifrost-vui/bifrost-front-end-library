/* Import */
import { ILogo } from '../../../components/logo/angular/api.model';

/* Local Interfaces */

interface IActiveMenuItemParams {
    unclickableInvisibleMessageBeforeItemLabel?: string;
}

interface IDefaultMenuItem {
    activeParams?: IActiveMenuItemParams;
    class?: string;
    href?: string;
    isActive?: boolean;
    isActiveLinkClickable?: boolean;
    label: string;
    rel?: string;
}

interface ITopBarSection {
    description?: string;
    items: ITopBarMenuItems[];
}

interface ITopBarMenuItems extends IDefaultMenuItem {}

/* Export Interfaces */
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

export interface IHeaderLogo {
    href: string;
    name: ILogo['name'];
}

export interface IMenuItems extends IDefaultMenuItem {
    color?: string;
    subItems?: IMenuItems[];
}

export interface ITopBar {
    left?: ITopBarSection;
    right?: ITopBarSection;
}
