import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers:[CartService]
})
export class HeaderComponent implements OnInit {

   loggedState:boolean = false

  constructor(public cartService:CartService, private authServise:AuthService) { }

  ngOnInit(): void {
    this.cartService.count=25
    this.authServise.isLOggedSubject.subscribe((isLogin:boolean)=>{
      this.loggedState = isLogin

      //other logic
      console.log('State change '+isLogin) 
    })
  }

  login(){
    this.authServise.logIn()
  }
  logOut(){
    this.authServise.logOut()
  }
}
