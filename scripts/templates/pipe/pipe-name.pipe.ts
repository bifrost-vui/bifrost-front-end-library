import { Pipe, PipeTransform } from '@angular/core';

/**
 * TODO: Write a description of the pipe.
 */
@Pipe({
  name: 'pipeName',
})
export class PipeNamePipe implements PipeTransform {
    /**
    * TODO: Write a description of the transform function.
    * @param value string
    */
    transform(value: string): string {
        return value?.toUpperCase();
    }
}
