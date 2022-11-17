import { Pipe, PipeTransform } from '@angular/core';
import { Request } from '../models/request';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Request[], filterText: string): Request[] {
    //filtertext gönderilmişmi,locallowercase harfleri küçültmek için 
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText?value
    .filter((r:Request)=>r.reasonRequest
    .toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
