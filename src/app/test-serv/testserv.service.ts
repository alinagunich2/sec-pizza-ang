import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestservService {

  

  public arr = [1]

  constructor() { }

  add(){
    this.arr.push(1)
  }
}
