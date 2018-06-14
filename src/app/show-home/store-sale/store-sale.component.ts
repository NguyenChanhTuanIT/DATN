import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LibraryService } from '../../library.service';
@Component({
  selector: 'app-store-sale',
  templateUrl: './store-sale.component.html',
  styleUrls: ['./store-sale.component.css'],
  providers:[LibraryService]
})
export class StoreSaleComponent implements OnInit {
  //refer
  id;
    selectedProduct;
    onSelect(sp):void{
      this.selectedProduct = sp;
    }
    constructor(private LibraryService: LibraryService, private http: Http) 
    { 
     
    }
    ngOnDestroy() {
      if (this.id) {
        clearInterval(this.id);
      }
    }
  //var

   //Gettime
              time = this.LibraryService.pushTimeSALE();
              secondd = this.time.second;
              minutess= this.time.minutes;
              hourr = this.time.hour;
              dayy = this.time.day;

            autotime(){
              if(this.time.second==0){
                  this.runMinutes();
                  this.time.second = this.secondd;
              }
              else
                this.time.second--;
              }
            runMinutes()
              {
                if(this.time.minutes==0){
                  this.runHours();
                  this.time.minutes = this.secondd;
              }
              else
                    this.time.minutes--;
              }
              
            runHours(){
                  if(this.time.hour==0){
                    this.runDays();
                    this.time.minutes = this.hourr;
                }
                else
                      this.time.hour--;
              }
            runDays(){
                  if(this.time.day==0){
                    this.time.day =0;
                    clearInterval;  }
                else
                      this.time.day--;
                }
           //getSALE SV

//getSale
    sale = this.LibraryService.pushSale();
    
    saledata;
    getHttp(){
      this.http.get('http://localhost:3000/getsale')
      .map(
        (res) => res.json()
      ).subscribe(
        (data) => {this.display(data);} 
      )
    }
    display(data){
      this.saledata = data;
    }

    ngOnInit() {
         this.getHttp();
         this.id = setInterval(()=> {
          this.autotime(); },1000);
        }
       
  }

  
