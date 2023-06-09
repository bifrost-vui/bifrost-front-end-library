/* Import */
import { ILogo } from '../../../components/logo/angular/api.model';

/* Local Interfaces */
interface ITopBarMenuItems {
    class?: string;
    href: string;
    label: string;
    rel?: string;
}

interface IAccountLink {
    href: string;
    icon: string;
    subtitle?: string;
    title: string;
}

/* Export Interfaces */
export interface IAccount {
    firstName: string;
    lastName: string;
    links: IAccountLink[];
}

export interface IHeaderLogo {
    href: string;
    name: ILogo['name'];
}

export interface IMenuItems {
    class?: string;
    color?: string;
    href?: string;
    label: string;
    subItems?: IMenuItems[];
}

export interface ITopBar {
    left?: ITopBarMenuItems[];
    right?: ITopBarMenuItems[];
}
