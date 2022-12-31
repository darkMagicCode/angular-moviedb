import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipSeeMore'
})
export class PipSeeMorePipe implements PipeTransform {

  transform(title:any[],seemore:number):any[] {
    return title.slice(0,seemore);
  }

}
