export interface IPrice {
    cent?: string;
    class?: string;
    details?: HTMLElement;
    dollar?: string;
    dollarClass?: string;
    fullWidth?: boolean;
    hasAsterisk?: boolean;
    isPriceBoxDisplayed?: boolean;
    language?: 'en' | 'fr';
    message?: HTMLElement;
    promotion?: IPromotion;
    size?: 'small' | 'medium' | 'large' | ISize;
    upfront?: IUpfront;
    upperTitle?: string;
    dashed?: string; // Deprecated: Use promotion.priceStriked instead.
    saved?: string; // Deprecated: Use promotion.priceSaved instead.
    savedLabel?: string; // Deprecated: Use promotion.savedLabel instead.
}

export interface IPromotion {
    direction?: 'vertical' | 'horizontal';
    isDisplayed?: boolean;
    priceSaved?: string;
    priceStriked?: string;
    savedLabel?: string;
    superscript?: string;
    title?: string;
}

export interface ISize {
    default: 'small' | 'medium' | 'large';
    sm?: 'small' | 'medium' | 'large';
    md?: 'small' | 'medium' | 'large';
    lg?: 'small' | 'medium' | 'large';
    xl?: 'small' | 'medium' | 'large';
    xxl?: 'small' | 'medium' | 'large';
}

export interface IUpfront {
    dollar?: string;
    label?: string;
}
