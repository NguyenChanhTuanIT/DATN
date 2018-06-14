import { Injectable } from '@angular/core';
//COMPONENT
import { Product} from './classes';
import { List_product_full} from './ObProductinfo';
import { Sale, Salemain, Time } from './ConstSale';
//HTTP
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LibraryService {

  constructor(private http : Http ) { }

//get
   postemail(obj){
     const url ='http://localhost:3000/post1';
     const headers = new Headers({'Content-Type':'application/json'});
     const body = JSON.stringify(obj);
     return this.http.post(url, body, {headers})
     .toPromise()
     .then(res => res.json())
     .then(resJson => console.log(resJson));
    }
    postddh(obj){
      const url ='http://localhost:3000/post2';
      const headers = new Headers({'Content-Type':'application/json'});
      const body = JSON.stringify(obj);
      return this.http.post(url, body, {headers})
      .toPromise()
      .then(res => res.json());
     }

  // detail
  getDetail(masp : string):Product{
    for(let i = 0; i<= List_product_full.length; i++)
    if(masp == List_product_full[i].id)
      return List_product_full[i];
 }
 getDetail2(masp : string):Product{
  for(let i = 0; i<= List_product_full.length; i++)
  if(masp == List_product_full[i].name)
    return List_product_full[i];
}
// Sale
  pushSale(){
    return Sale;
  }
  pushSaleMain(){
    return Salemain;
  }
  pushTimeSALE(){
    return Time;
  }
//getInfor

//Email
checkEmail(email:string):boolean { 
      
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if (!filter.test(email)) { 
            return false; 
    }
    else{ 
            return true;
    } 
   } 
}