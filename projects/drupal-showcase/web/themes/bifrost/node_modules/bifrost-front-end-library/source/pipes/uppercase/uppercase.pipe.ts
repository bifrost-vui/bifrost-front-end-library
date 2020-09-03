import { Pipe, PipeTransform } from '@angular/core';

/**
 * Transforms a string into uppercase.
 */
@Pipe({
  name: 'uppercase',
})
export class UppercasePipe implements PipeTransform {
    /**
    * Transforms a string into uppercase.
    * @param value string
    */
    transform(value: string): string {
        return value?.toUpperCase();
    }
}
