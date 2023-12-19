import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartProductService {
  product:string =''
  
  count:number = 0
  constructor() { }
}
