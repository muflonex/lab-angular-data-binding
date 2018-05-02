import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, value: any, args?: any): any {
    if (!items) return []
    if (!searchText) return items

    searchText = searchText.toLowerCase();

    return items.filter( e => {
      return e.name.toLowerCase().includes(searchText)
    })
  }

}
