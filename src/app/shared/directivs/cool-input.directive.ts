import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[coolInput]'
})
export class CoolInputDirective implements OnInit {

  constructor(private el:ElementRef,
              private rend:Renderer2
    ) {
   
   }

   private _isOnFo:boolean=false
   @HostBinding('class.isOnFo')
   get GetIsOnFo(){
    return this._isOnFo
   }


   private _backgroundColor:string=''

   
   @HostBinding('style.backgroundColor')
   get GetBgColor(){
    return this._backgroundColor
   }

   changeElementBGColor(color:string){
    // this.rend.setStyle(this.el.nativeElement,'background-color', color)

    this._backgroundColor=color
  }


   @Input()coolInputDefaultDgColor:string ='white'
   @Input()coolInputFocusDgColor:string ='red'

   @HostListener('focus')
   onFocus(){
    this.changeElementBGColor( this.coolInputFocusDgColor)
    this._isOnFo=true
   }

   @HostListener('blur')
   onBlur(){
    this.changeElementBGColor( this.coolInputDefaultDgColor)
    this._isOnFo=false
   
  }

   @HostListener('click',['$event.target'])
   onClick(target:HTMLElement){
    console.log(target)
   }

 


   ngOnInit(){
    // this.el.nativeElement.style.backgroundColor='red'
    // console.log(this.el.nativeElement.innerText='red')
    // this.changeElementBGColor(this.coolInputDefaultDgColor)
    this._backgroundColor='blue'

    // this.rend.setAttribute(this.el.nativeElement,'placeholder',this.el.nativeElement.getAttribute('placeholder')+'*')
   
  // const text = this.rend.createElement('span')
  // this.rend.setProperty(text,'innerText','*обязательно заполнить')
  // this.rend.setStyle(text,'color', 'red')
  // this.rend.insertBefore(this.el.nativeElement.parentElement, text, this.rend.nextSibling(this.el.nativeElement))
  }
}
