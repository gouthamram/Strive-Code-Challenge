import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLowerCase();
let filteredItems = items.filter( it => {
    return it.name.toLowerCase().includes(searchText);
  });
console.log(filteredItems);
return filteredItems;
   }
}