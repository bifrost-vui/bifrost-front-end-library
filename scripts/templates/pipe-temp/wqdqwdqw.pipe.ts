import { Pipe, PipeTransform } from '@angular/core';

/**
 * TODO: Write a description of the pipe.
 */
@Pipe({
  name: 'wqdqwdqw',
})
export class WqdqwdqwPipe implements PipeTransform {
    /**
    * TODO: Write a description of the transform function.
    * @param value string
    */
    transform(value: string): string {
        return value?.toUpperCase();
    }
}
