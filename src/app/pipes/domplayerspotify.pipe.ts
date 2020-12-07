import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domplayerspotify'
})
export class DomplayerspotifyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
