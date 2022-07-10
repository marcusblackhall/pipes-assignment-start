import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string  ): any {

    // sort by status
    if (value.length === 0) return value;

    return value.sort( (s1,s2) => {
      if ( s1[propName] < s2[propName]) return -1;
      if ( s1[propName] > s2[propName] )return 1;  
      return 0;
    });

  }

  
}
