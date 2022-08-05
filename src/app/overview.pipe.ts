import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'overview'
})
export class OverviewPipe implements PipeTransform {

  transform(overview:string,start:number,end:number): string {
    return overview.split(' ').slice(start,end).join(' ');
  }

}
