import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'domsegurod'
})
export class DomsegurodPipe implements PipeTransform {

 constructor(private domSanitizer: DomSanitizer){}

transform(value: string): any {
  const url = 'https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&color=EF5466&layout=&size=medium&type=tracks&id=';
  return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
}

}
