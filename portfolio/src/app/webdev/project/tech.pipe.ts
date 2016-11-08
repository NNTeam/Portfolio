import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'techIcon'
})
export class TechPipe implements PipeTransform {

  path: string = "./assets/img/icons/";
  extension: string = ".png";

  transform(tech: string): string {
    return this.path + tech.toLowerCase() + this.extension;
  }
}
