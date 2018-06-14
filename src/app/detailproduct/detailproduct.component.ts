import { Component, OnInit, Input } from '@angular/core';
import { LibraryService  } from '../library.service';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styles:[
    `
    .topheader > p{

      padding:0 55px;
      border-bottom:2px solid #ebebeb;
    }
    .linkhome{
      color: #f4574c;

    }
    .order{
      color: #f4574c;
      padding-left:10px;
    }
    .spp{
      color: #f4574c;
      padding-left:10px;
    }
    .infordetail{
      
    }
    #myimage{
      margin-top :40px;
      width:50%;
    }
    
    `
  ],
  providers:[LibraryService]
})
export class DetailproductComponent implements OnInit {

  constructor(private detail : LibraryService) { }
  sale = this.detail.pushSaleMain();
  productDetail;
  path = document.location.pathname;

  cutpath(){
    return  this.path.substring(this.path.lastIndexOf('/')+1)
  }

  status(name, email, phone, address){
      if( (this.detail.checkEmail(email)==true) && name!='' && phone!='' && address!='')
    {
    
      var obj = {
          'name' : name,
          'email':email,
          'phone':phone,
          'address':address,
          'product': this.cutpath().toString()
        }
      this.detail.postddh(obj);
      alert('SUCCESS, employee will contact you to talk soon');
      
    }
    else{
      alert('Somthing is wrong');
     
    }
  }
  
  getDetail():void{
    try{
    this.productDetail = this.detail.getDetail(this.cutpath());
    }
    catch(err){
      console.log(err)
    }
  }

  ngOnInit() {
    this.getDetail();
    console.log(this.cutpath());
  }

}
