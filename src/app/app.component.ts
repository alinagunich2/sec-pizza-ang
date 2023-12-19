import { Component} from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from './shared/services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[CartService,ProductService]
})
export class AppComponent {
  
}