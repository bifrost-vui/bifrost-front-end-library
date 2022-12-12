export interface IUpfront {
    label: string;
    dollar: number;
}

export interface IPromotion {
    title: string;
    priceStriked: number;
    priceSaved: number;
    savedLabel: string;
    superscript: string;
    direction: string;
}

export interface IPrice {
    upperTitle: string;
    upfront: IUpfront;
    dollar: number;
    dollarClass: string;
    cent: number;
    hasAsterisk: boolean;
    promotion: IPromotion;
    dashed: string; // Deprecated: Use promotion.priceStriked instead.
    saved: string; // Deprecated: Use promotion.priceSaved instead.
    savedLabel: string; // Deprecated: Use promotion.savedLabel instead.
    details: string;
    message: string;
    size: 'small' | 'medium' | 'large';
    fullWidth: boolean;
    class: string;
    reversed: boolean;
    language: 'en' | 'fr';
}
