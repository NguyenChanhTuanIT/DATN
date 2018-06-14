import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LibraryService } from '../library.service';
@Component({
  selector: 'app-show-product-thankful',
  template: 
  `
  <div class='rows elementpadding'>
    <p class='elementname'>Thankful flower</p>
    <p class='elementpage'><a routerLink='/home'>Home </a>&raquo; Thankful flower</p>
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
export class ShowProductThankfulComponent implements OnInit {
 
  countproduct:number;

  constructor(private http : Http, private LibraryService: LibraryService) { }
  sp;
  sale = this.LibraryService.pushSaleMain();
  getHttp(){
      this.http.get('http://localhost:3000/getthank')
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