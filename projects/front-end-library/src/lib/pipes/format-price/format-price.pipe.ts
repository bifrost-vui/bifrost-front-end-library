import { Pipe, PipeTransform } from '@angular/core';

/**
 * Format string with dollar currency.
 */
@Pipe({
  name: 'format-price',
})
export class FormatPricePipe implements PipeTransform {
    /**
    * Format string with dollar currency.
    * @param value string
    */
    transform(price: string, options: object): string {
        const language = (options && options[0]) || 'en';
        if (language === 'fr') {
            return price + '&nbsp;$';
        } else {
            return '$' + price;
        }
    }
}
