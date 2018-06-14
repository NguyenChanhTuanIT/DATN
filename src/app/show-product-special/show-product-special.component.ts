import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { LibraryService } from '../library.service';
@Component({
  selector: 'app-show-product-special',
  template: 
  `
  <div class='rows elementpadding'>
    <p class='elementname'>Special flower</p>
    <p class='elementpage'><a routerLink='/home'>Home </a>&raquo; Special flower</p>
    <span class='elementamount'>There are <span class='amount'>{{countproduct}}</span> product</span>
  </div>
  
  <div class='row'>
      <div class='box_product'>
        <div  *ngFor='let item of sp' class="product">
              <p class='name_product'>{{item.name}}</p>
              <img class="img_product" [src]='item.src' [alt]='item.name' >
              <p class="xem_product"> <a id="xem" routerLink='/order/{{this.item.id}}'>Order now</a></p>
              <span class="cost_product">{{item .cost}}&#36;</span>
              <span class="sale_product">{{item.cost -item.cost*sale}}&#36;</span>
          </div>
      </div>
  </div>
  `,
  styles: [`
  .
    
  
  `],
  providers:[LibraryService]
})
export class ShowProductSpecialComponent implements OnInit {
 
  countproduct:number;

  constructor(private LibraryService: LibraryService, private http : Http) { }

  sale = this.LibraryService.pushSaleMain();
  sp;
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
      this.countproduct = data.length;
    }

    ngOnInit() {
         this.getHttp();


        }
  }