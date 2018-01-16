import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace(/\s+/g, '_');
  }

}
