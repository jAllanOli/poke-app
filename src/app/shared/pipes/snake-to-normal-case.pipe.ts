import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snakeToNormalCase',
})
export class SnakeToNormalCasePipe implements PipeTransform {
  transform(value: string): string {
    return value.replaceAll('-', ' ');
  }
}
