import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordUpper'
})
export class WordUpperPipe implements PipeTransform {

  transform(value: string, word:string[]): string {
    
    let res = value;

    word.forEach(itm=>{
      res = value.replace(new RegExp('[А-Яа-я]*'+itm+'[а-я]*','g'),(match:string)=>{
        return match.toUpperCase()
      });
    })
    
    return res
  
  }

}
