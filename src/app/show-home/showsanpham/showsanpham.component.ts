
import { Component, OnInit, Input } from '@angular/core';
import { LibraryService } from '../../library.service';

@Component({
  selector: 'app-showsanpham',
  template: 
  `
  <div *ngIf='Choosingproduct' class='animate' id='id01'>
    <div class="modal" > 
           <div class="modal-content">
              <div class="topheader">
                  <span class="titleinfor" style="float:center;">Product's Info</span>
                  <span class="cancle" id="cancle02" (click)="hidden()">&times;</span>
              </div>
              <div class="infor">
                  <div class="infor_content infor_content_img">
                      <img id="myimage" class="img_hidden1" [src]='Choosingproduct.src' alt="ahihi">
                  </div>
                  <div class="infor_content infor_content_infor">
                      <p>Name: <span class="name_hidden">{{Choosingproduct.name}}</span></p>
                      <p>Cost: <span class="cost_hidden">{{Choosingproduct.cost - Choosingproduct.cost*sale}}&#36;</span></p>
                      <p>Introduce: <span class="sg_hidden">{{Choosingproduct.suggestions}}</span></p>
                      <p class="order_hidden"> <a  routerLink='/order/{{this.Choosingproduct.id}}'>Order now</a></p>
                      <p>Call now: <span class="sdt_hidden" >123456789</span></p>
                  </div>
              </div>
           </div>
    </div>
</div>
  `,
  providers:[LibraryService]
})
export class ShowsanphamComponent implements OnInit {
 
  @Input() Choosingproduct;


  hidden(){
     this.Choosingproduct = null;
  }
 

  constructor(private LibraryService : LibraryService) { 
   
  }
  sale = this.LibraryService.pushSaleMain();

  ngOnInit() {
    

  }

}
