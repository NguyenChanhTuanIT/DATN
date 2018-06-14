import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LibraryService } from '../../library.service';
@Component({
  selector: 'app-newproduce',
  templateUrl: './newproduce.component.html',
  styleUrls: ['./newproduce.component.css'],
  providers:[LibraryService]
})
export class NewproduceComponent implements OnInit {

  selectedProductnew;
  onselectnew(spnew):void{
    this.selectedProductnew = spnew;
  }
  constructor(private LibraryService: LibraryService, private http: Http) { }
  sp;
  sale = this.LibraryService.pushSaleMain();


  
  getHttp(){
      this.http.get('http://localhost:3000/getfresh')
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