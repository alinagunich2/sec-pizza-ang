import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProductType } from 'src/app/type/product.type';

@Component({
  selector: 'app-product-descrip',
  templateUrl: './product-descrip.component.html',
  styleUrls: ['./product-descrip.component.scss']
})
export class ProductDescripComponent implements OnInit {

  product:ProductType = {} as ProductType

  constructor(private acriveRute:ActivatedRoute,
    private productServes:ProductService,
    private router:Router) { }

  ngOnInit(): void {
    this.acriveRute.params.subscribe((params)=>{

      if(params['id']){

       this.productServes.getProduct(+params['id'])
       .subscribe({
        next:(data)=>{
          this.product=data
        },
        error:(err)=>{
          this.router.navigate(['/'])
        }
       })

       
      }
    })
  }



}
