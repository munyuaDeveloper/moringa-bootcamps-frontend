import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(date: string): string {
    if (date) {
      return date.replace('T', ' ').replace(/-/g, '/');
    }
    return 'No date';
  }

}
