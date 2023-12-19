import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chickenDes'
})
export class ChickenDesPipe implements PipeTransform {

  transform(value: string): string {
    console.log(value)
    return value.replace(/([Кк]ур(?:иц|ин|о)[а-я]+)/g,(match:string)=>{
      return match.toUpperCase()
    });
  }

}
