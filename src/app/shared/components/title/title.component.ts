import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'custom-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() productTitle:string = ''

  constructor() { }

  ngOnInit(): void {
    //  this.productTitle.toLocaleUpperCase()
  }

  toUpper(){
    return this.productTitle.toLocaleUpperCase()
  }
  tolower(){
    return this.productTitle.toLocaleLowerCase()
  }

}
