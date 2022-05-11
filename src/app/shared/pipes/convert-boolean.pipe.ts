import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertBoolean'
})
export class ConvertBooleanPipe implements PipeTransform {

  transform(value: string): any {
  if (value === 'True') {
    return 'Yes';
  }
  return 'No';
}

}
