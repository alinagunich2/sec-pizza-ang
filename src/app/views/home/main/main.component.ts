import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, Subscriber, Subscription, from, map } from 'rxjs';
import { PopupComponent } from 'src/app/shared/components/popup/popup.component';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProductType } from 'src/app/type/product.type';
import { environment } from 'src/environments/environment';

// declare var bootstrap:any
// import * as bootstrap from 'bootstrap'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy,AfterViewInit {

  test = false

  title = 'pi';

  // private observ:Observable<number>
  private subject:Subject<number>
  private subscribtion:Subscription |null = null
  // private promis:Promise<string>


  constructor(
    public cartService:CartService
    ){


      this.subject = new Subject<number>()
      let num = 0
      const inter = setInterval(()=>{
        this.subject.next(num++)
       },1000);
      const timeout1 = setTimeout(()=>{
        this.subject.complete()
       },6000);
   



      // this.observ = from([1,2,3,4,5,6])
      
  //  this.observ = new Observable((observ)=>{
  //   let num = 0
  //    const inter = setInterval(()=>{
  //       observ.next(num++)
  //     },1000);
  //    const timeout1 = setTimeout(()=>{
  //       observ.complete()
  //     },4000);
  //    const timeout2= setTimeout(()=>{
  //       observ.error('error')
  //     },5000)

  //     return{
  //       unsubscribe() {
  //         clearInterval(inter);
  //         clearTimeout(timeout1);
  //         clearTimeout(timeout2);
  //       },
  //     }
  //   })


    // this.promis = new Promise<string>((resolve, reject) => {
    //     setTimeout(()=>{
    //       resolve('hi') 
    //     },3000)

    //     setTimeout(()=>{
    //       resolve('hi i') 
    //     },3000)
    //   })
     
  }


  // @ViewChild('popap')
  // popap!:TemplateRef<ElementRef>

  @ViewChild(PopupComponent)
  private popapComponent!:PopupComponent

  ngAfterViewInit(): void {
    // this.modalService.open(this.popap, {});


    // const modalRef = this.modalService.open(PopupComponent);
		// modalRef.componentInstance.data = 'World';

    this.popapComponent.open()
  }


  //  letData:Promise<string>|null=null
   ngOnInit(){
    console.log(environment.production)

    // const myModalAlternative = new bootstrap.Modal('#myModal',{})
    // myModalAlternative.show()

    this.subscribtion = this.subject
      .subscribe({
      next:(param:number)=>{
        console.log('subcrr:1',param)
      },
      error:(error:string)=>{
        console.log('ERROR!!!'+error)
      }
    })




  //  this.subscribtion = this.observ
  //  .pipe(
  //   map((numb:number)=>{
  //     return numb*10
  //   })
  //  )
  //  .subscribe({
  //     next:(param:number)=>{
  //       console.log('subcrr:1',param)
  //     },
  //     complete:()=>{
  //       console.log('complite end')
  //     },
  //     error:(error:string)=>{
  //       console.log('ERROR!!!'+error)
  //     }
  //   })

    // this.promis.then((param:string)=>{
    //   console.log(param)
    // })

   }
   ngOnDestroy(){
    this.subscribtion?.unsubscribe()
   }

   Test(){
   

    this.subject
    .pipe(
    map((numb:number)=>{
      return 'Число'+numb
    })
    )
    .subscribe((parman:string)=>{
      console.log('sibscrab 2',parman)
    })


    // this.observ
    // .pipe(
    // map((numb:number)=>{
    //   return 'Число'+numb
    // })
    // )
    // .subscribe((parman:string)=>{
    //   console.log('sibscrab 2',parman)
    // })
   }


}
