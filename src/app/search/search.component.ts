import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private detail : LibraryService) { }

  patch = document.location.pathname;
  productsearch;
  consale = this.detail.pushSale();
  cutpath(){
    return  this.patch.substring(this.patch.lastIndexOf('/')+1).toString();
  }
  getproductsearch(){
    try{
     this.productsearch = this.detail.getDetail2(this.cutpath());
    }
    catch(err){
      console.log(err)
    }
  }
  ngOnInit() {
    console.log(this.cutpath());
    this.getproductsearch();
  }
}
