import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repeatdom'
})
export class RepeatdomPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (new Array(value)).fill(1);
  }

}