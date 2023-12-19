import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild , AfterViewInit, OnChanges, SimpleChanges} from '@angular/core';
import { ProductType } from 'src/app/type/product.type';
import { TitleComponent } from '../title/title.component';
import { TestservService } from 'src/app/test-serv/testserv.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { CartProductService } from 'src/app/shared/services/cart-product.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
 
})
export class ProductComponent implements OnInit, OnChanges{

  Ali=true 

  @Input() product:ProductType = {} as ProductType;

  // @Input()
  // get product():ProductType{return this._product}
  // set product(param:ProductTy  pe){
  //   param.title = param.title.toLocaleUpperCase()
  //   this._product = param
  // }


  
 ngOnChanges(changes: SimpleChanges): void {
  //  console.log('ngOnCanges', changes)
 }

 add(){
  this.cartService.count++
 }


  private _product:ProductType = {} as ProductType;

  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>()
  constructor( public testservService:TestservService,
    public cartService:CartService,
    public cartProductService:CartProductService) {
   } 

  ngOnInit(): void {
  }

  @ViewChild(TitleComponent)
  private titleComponent!:TitleComponent
  addProductToCart(){
    this.cartProductService.count++
    this.Ali = false
    this.addToCartEvent.emit(this.titleComponent.productTitle)
    
  }

  @ViewChild('comp')
  private comp!:ElementRef;
  // ngAfterViewInit(){
  //   console.log(this.comp)
  // }

  ngAfterContentChecked(){
    // console.log('отработка ngAfterContentChecke')
  }
  
  
  ngAfterViewInit(){
    // console.log('отработка ngAfterViewInit')
  }
  
  

  text(){
    // console.log(1)
  }

}
