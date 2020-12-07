import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domplayerdeezer'
})
export class DomplayerdeezerPipe implements PipeTransform {


constructor(private domSanitizer: DomSanitizer){}

 transform(value: string): any {
  const url = 'https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&color=EF5466&layout=&size=medium&type=album&id=';
  return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
}

}
