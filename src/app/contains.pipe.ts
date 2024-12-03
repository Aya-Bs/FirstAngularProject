import { Pipe, PipeTransform } from '@angular/core';


//decorateur pour dire que cette classe est un pipe
@Pipe({
  name: 'contains'
})
//PipeTransform : interface generique de pipe qui permet de transformer une valeur en une autre valeur
export class ContainsPipe implements PipeTransform {
//value : valeur à transformer, valeur à l'entrée
 /* transform(value: unknown, ...args: unknown[]): unknown {

    return null;
  }*/
    transform(items: any[], searchText: string): any {
      if (!items) return [];
      if (!searchText) return items;
      searchText = searchText.toLowerCase();
      return items.filter(item => {
        return JSON.stringify(item).toLowerCase().includes(searchText);
      });
      return null;
    }


}
