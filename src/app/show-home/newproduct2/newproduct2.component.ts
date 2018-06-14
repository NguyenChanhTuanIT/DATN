import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../library.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-newproduct2',
  template:
  `
  <div class='rows' style='margin-top:20px'>
  <div class="newproduct" id="newproduct">
    <div class="bg_icon">
      <p class="title title_under"><a>Special today</a></p>
    </div>
    <div class="box_product2">
              <div  *ngFor='let item of sp' class="product">
                      <p class='name_product'>{{item.name}}</p>
                      <img class="img_product" [src]='item.src' [alt]='item.name' >
                      <p class="xem_product"><a id="xem" (click)='onselectnew(this.item)' title="Show product">read...</a></p>
                      <span class="cost_product">{{item .cost}}&#36;</span>
                      <span class="sale_product">{{item.cost -item.cost*sale}}&#36;</span>
                    </div>
                    </div>
          </div>
  </div>
<app-showsanpham [Choosingproduct]='selectedProductnew'></app-showsanpham>
  
  `,
  styleUrls: ['./newproduct2.component.css']
})
export class Newproduct2Component implements OnInit {

  selectedProductnew;
  onselectnew(spnew):void{
    this.selectedProductnew = spnew;
  }
  constructor(private LibraryService: LibraryService, private http: Http) { }
  sp;
  sale = this.LibraryService.pushSaleMain();


  
  getHttp(){
      this.http.get('http://localhost:3000/getspecial')
      .map(
        (res) => res.json()
      ).subscribe(
        (data) => {this.display(data);} 
      )
    }
    display(data){
      this.sp = data;
    }

    ngOnInit() {
         this.getHttp();

        }
  }
