import { Injectable } from '@angular/core';
import { ProductType } from '../../type/product.type';
import { catchError, map,tap,of,retry, Observable} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private products:ProductType[]=[]

  constructor( private router:Router,
    private http:HttpClient) { }

  getProducts():Observable<ProductType[]>{
    //ajax

    return  this.http.get<ProductType[]>('https://testologia.site/pizzas')
    .pipe(
      tap((result)=>{
        console.log(result)
      }),
      map((result)=>(result)),
      // catchError(error=>{
      //   return of([])
      // }),
      // retry(3)
    )
  }
 getProduct(id:number):Observable<ProductType>{
  // return this.products.find(itm=>(itm.id===id))

  return  this.http.get<ProductType>(`https://testologia.site/pizzas?id=${id}`)
 }
 createOrder(data:{product:string,address:string,phone:string}){
  return  this.http.post<{success:boolean,message?:string}>(`https://testologia.site/order-pizza`,data)

 }
}
