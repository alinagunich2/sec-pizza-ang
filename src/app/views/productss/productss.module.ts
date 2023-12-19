import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductssRoutingModule } from './productss-routing.module';
import { ProductDescripComponent } from './product-descrip/product-descrip.component';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductDescripComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductssRoutingModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    ProductssRoutingModule
  ]
})
export class ProductssModule { }

