import { Directive, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { TitleComponent } from './components/title/title.component';
import { CoolInputDirective } from './directivs/cool-input.directive';
import { ChickenDesPipe } from './pipe/chicken-des.pipe';
import { ChickenProductsPipe } from './pipe/chicken-products.pipe';
import { WordUpperPipe } from './pipe/word-upper.pipe';
import { RouterModule } from '@angular/router';
import { PopupComponent } from './components/popup/popup.component';




@NgModule({
  declarations: [
 
    ProductComponent,
    TitleComponent,
    CoolInputDirective,
    ChickenDesPipe,
    ChickenProductsPipe,
    WordUpperPipe,
    PopupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports:[

    ProductComponent,
    TitleComponent,
    CoolInputDirective,
    ChickenDesPipe,
    ChickenProductsPipe,
    WordUpperPipe,
    PopupComponent
  ]
})
export class SharedModule { }
