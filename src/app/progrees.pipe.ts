import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'progrees',
})
export class ProgreesPipe implements PipeTransform {
  transform(num: number): number {
    return 100 - parseInt(num.toString().slice(0, 3)) * 10;
  }
}
