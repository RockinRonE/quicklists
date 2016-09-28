import { Pipe } from '@angular/core';

@Pipe({
  name: 'pluralItem'
})

export class PluralItem {
  transform(value, args) {
    if (value == 0) {
      return 'No Items';
    } else if (value == 1) {
      return value + ' item';
    } else {
      return value + ' items';
    }
  }
}
