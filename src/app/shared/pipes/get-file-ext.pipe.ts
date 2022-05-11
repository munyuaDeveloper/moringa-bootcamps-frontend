import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'getFileExt'
})
export class GetFileExtPipe implements PipeTransform {

  transform(item) {
    if (item !== null){
      return item.substring(1 + +item.lastIndexOf('.')).toUpperCase();
    } else {

    }
  }

}

