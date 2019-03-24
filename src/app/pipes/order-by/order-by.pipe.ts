import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash-es';
@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: Array<any>, param: any): Array<any> {
    if (!value || !value.length) {
      return value;
    }
    return orderBy(value, [function(val) {
      return (typeof val[param] === 'string')
        ? val[param].toLowerCase()
        : val[param];
    }], ['asc']);
  }

}
