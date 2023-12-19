import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { CartProductService } from 'src/app/shared/services/cart-product.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProductType } from 'src/app/type/product.type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(public productSErvice:ProductService,
    private cardProdServe:CartProductService,
    private router:Router,
  ) { }


  products: ProductType[]=[]
  loading:boolean = false


  ngOnInit(): void {
    this.loading = true
    this.productSErvice.getProducts()
    .pipe(
      tap(()=>{
        this.loading=false
      })
    )
        .subscribe({
      next:(data)=>{
        this.loading=false
        this.products = data
        console.log('dgdgd')
      },
      error:(error)=>{
        console.log(error)
        this.router.navigate(['/'])
      }
    })

    
  }
  public addToCards(title:string):void{
    this.cardProdServe.product=title
    // this.router.navigate(['/order'])
    // this.router.navigate(['/order',{product:title}])
    this.router.navigate(['/order'],{queryParams:{product:title}})
   }
}
