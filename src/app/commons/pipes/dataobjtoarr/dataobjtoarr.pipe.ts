import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataobjtoarr'
})
export class DataobjtoarrPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let res: any = [];
    for (var key in value) {
      for(var i=0; i< args.length; i++){
        if (args[i].name === key) {
          res.push(value[key]);
        }
      }
    };
    return res;
  }

}
