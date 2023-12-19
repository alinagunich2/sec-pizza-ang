import { Pipe, PipeTransform } from '@angular/core';
import { ProductType } from '../../type/product.type';

@Pipe({
  name: 'chickenProducts'
})
export class ChickenProductsPipe implements PipeTransform {

  transform(value: ProductType[]): ProductType[] {
   return value.filter(item=>item.title.toLocaleLowerCase().includes('кур'))
  }

}
