import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    if (value.length > 0){

      let reverseStr:string = '';

      for(let i = value.length -1; i > -1;i--){
         reverseStr += value.charAt(i);
      }
      return reverseStr;

    }
    return value;

  }

}
