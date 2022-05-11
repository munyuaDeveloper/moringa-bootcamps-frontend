import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatStatus'
})
export class FormatStatusPipe implements PipeTransform {

  transform(item) {
    if (item) {
      return item.replace(/^(?:[^_]*_){2}/g, '');
    }
  }

}


