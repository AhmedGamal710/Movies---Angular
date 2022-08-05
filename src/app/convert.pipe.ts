import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(number:number): number {
    return parseInt( number?.toString().slice(0,3)) * 10;
  }

}
