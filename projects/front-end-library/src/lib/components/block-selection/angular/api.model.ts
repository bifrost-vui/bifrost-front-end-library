export interface IBlockSelection {
    class?: string;
    contentLists?: IContentLists[];
    isCollapsableOnMobile?: boolean;
    isCollapsedByDefaultOnMobile?: boolean;
    title?: string;
    titleTag?: string;
    topLink?: ILink;
    totalPrice?: ITotalPrice;
}

export interface IContentLists {
    btnDelete?: ILink;
    btnModify?: ILink;
    description?: string;
    fullPrice?: string;
    link?: ILink;
    price?: string;
    priceInfo?: string;
    saving?: string;
    title?: string;
}

export interface ILink {
    href: string;
    label?: string;
}

export interface ITotalPrice {
    details: string;
    label: string;
    price: string;
    priceDetails: string;
    priceInfo?: string;
}
