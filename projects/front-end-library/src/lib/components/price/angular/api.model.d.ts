
interface IUpfront {
  label         : string;
  dollar        : number;
}

interface IPromotion {
  priceStriked  : number;
  priceSaved    : number;
  savedLabel    : string;
  superscript   : string;
  direction     : string;
}

interface IPrice {
    upperTitle  : string;
    upfront     : IUpfront;
    dollar      : number;
    dollarClass : string;
    cent        : number;
    hasAsterisk : boolean;
    promotion   : IPromotion;
    dashed      : string;
    saved       : string;
    savedLabel  : string;
    details     : string;
    message     : string;
    size        : 'small' | 'medium' | 'large';
    fullWidth   : boolean;
    class       : string;
    reversed    : boolean;
    language    : 'en' | 'fr';
}