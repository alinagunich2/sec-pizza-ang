import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupComponent } from 'src/app/shared/components/popup/popup.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit,AfterViewInit {

  constructor( private  modalService: NgbModal) { }

  ngOnInit(): void {
  }

  // ngAfterViewInit(): void {
  //   // this.modalService.open(this.popap, {});


  //   const modalRef = this.modalService.open(PopupComponent);
	// 	modalRef.componentInstance.data = 'about';
  // }


  @ViewChild(PopupComponent)
  private popapComponent!:PopupComponent

  ngAfterViewInit(): void {
    this.popapComponent.open()
  }

}
