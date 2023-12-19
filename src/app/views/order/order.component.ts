import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscribable, Subscription } from 'rxjs';
import { CartProductService } from 'src/app/shared/services/cart-product.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit,OnDestroy{
  public formValues = {
    productTitle:'',
    address:'',
    phone:''
  }

  private subscribtion:Subscription | null= null
  private subscribtionOrder:Subscription | null= null

  constructor(private cartServe:CartProductService,
    private activateRout:ActivatedRoute,
    private productService:ProductService) { }

  ngOnInit(): void {
    // if(this.cartServe.product){
    //   this.formValues.productTitle=this.cartServe.product
    // }

    // const productParam = this.activateRout.snapshot.queryParamMap.get('product')
    // if(productParam){
    //   this.formValues.productTitle = productParam
    // }

    
  this.subscribtion= this.activateRout.queryParams.subscribe((params)=>{
      if(params['product']){
        this.formValues.productTitle = params['product']
      }
    })
    
  }

  observSabccrTest(){
    this.subscribtion?.unsubscribe()
    this.subscribtionOrder?.unsubscribe()
  }

  public createOrder(){
    if(!this.formValues.productTitle){
      alert('Заполните пиццу');
      return;
  }
  if(!this.formValues.address){
      alert('Заполните адрес');
      return;
  }
  if(!this.formValues.phone){
      alert('Заполните телефон');
      return;
  }

 this.subscribtionOrder=this.productService.createOrder({
    product:this.formValues.productTitle,
    address:this.formValues.address,
    phone:this.formValues.phone
   })
   .subscribe(res=>{
    if(res.success&&!res.message){
      alert('Спасибо за заказ');
      this.formValues = {
        productTitle:'',
        address:'',
        phone:''
       }    
    }else{
      alert('Error');
    }
   })
}


ngOnDestroy(): void {
  this.subscribtion?.unsubscribe()
}

}
