import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDescripComponent } from './product-descrip/product-descrip.component';

const routes: Routes = [
  {
    path:'',
    component:ProductsComponent
  },
  {
    path:':id',
    component:ProductDescripComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductssRoutingModule { }
