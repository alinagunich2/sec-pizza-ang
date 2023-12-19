import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  public isLOggedSubject:Subject<boolean> = new Subject<boolean>()

  private isLogged = false

  logIn(){
    this.isLogged = true
    this.isLOggedSubject.next(this.isLogged)
  }

  logOut(){
    this.isLogged = false
    this.isLOggedSubject.next(this.isLogged)

  }

  getTocen(){
    return 'tocen125478dhdhd1'
  }

  isLoggedIn():boolean{
    return this.isLogged
  }
}
