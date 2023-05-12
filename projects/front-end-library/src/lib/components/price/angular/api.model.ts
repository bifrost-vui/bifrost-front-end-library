export interface IUpfront {
    dollar: string;
    label: string;
}

export interface IPromotion {
    direction: string;
    priceSaved: string;
    priceStriked: string;
    savedLabel: string;
    superscript: string;
    title: string;
}

export interface IPrice {
    cent: string;
    class: string;
    details: string;
    dollar: string;
    dollarClass: string;
    fullWidth: boolean;
    hasAsterisk: boolean;
    language: 'en' | 'fr';
    message: string;
    promotion: IPromotion;
    reversed: boolean;
    size: 'small' | 'medium' | 'large';
    upfront: IUpfront;
    upperTitle: string;
    dashed: string; // Deprecated: Use promotion.priceStriked instead.
    saved: string; // Deprecated: Use promotion.priceSaved instead.
    savedLabel: string; // Deprecated: Use promotion.savedLabel instead.
}
