import { Component, OnInit} from '@angular/core';
import { LibraryService } from './library.service';
import { Product } from './classes';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ LibraryService ]
})
export class AppComponent {

  constructor(private Servicelibrary: LibraryService) { 
  }
 
//Header

    urlHeader = [
      {id : 1,src : '../assets/image/fb1.png', alt: 'Fb Giftlove', title : 'Follow facebook Giftlove'},
      {id : 2,src : '../assets/image/sk1.png', alt: 'Sky Giftlove', title : 'Sky Giftlove'},
      {id : 3,src : '../assets/image/phone1.png',alt: 'Phone Giftlove', title : 'Call to Giftlove'},
      {id : 4,src : '../assets/image/logo.png',alt: 'Logo Giftlove', title : 'Giftlove quà tặng yêu thương'},
      {id : 5,src : '../assets/image/user1.png',alt: 'User Giftlove', title : 'Login'},
      {id : 6,src : '../assets/image/menu.png',alt: 'Menu Giftlove', title : 'Menu'}
    ];
        changefb1() : void {
              this.urlHeader[0].src = '../assets/image/fb2.png';
        }
        changefb2() : void {
          this.urlHeader[0].src = '../assets/image/fb1.png';
        }
        changesk1() : void {
          this.urlHeader[1].src = '../assets/image/sk2.png';
        }
        changesk2() : void {
        this.urlHeader[1].src = '../assets/image/sk1.png';
        }
        changephone1() : void {
          this.urlHeader[2].src = '../assets/image/phone2.png';
        }
        changephone2() : void {
        this.urlHeader[2].src = '../assets/image/phone1.png';
        }
/*MenuHidden */
  listmenuhidden = [
    {id : 1, name : 'Home', href : '/home'},
    {id : 2, name : 'Fresh', href : '/fresh'},
    {id : 3, name : 'Special', href : '/special'},
    {id : 4, name : 'Thankful', href : '/thankful'},
    {id : 5, name : 'Contact', href : '/contact'}
  ];
  listmenu = this.listmenuhidden;

  urlheader = {id:1,src : '../assets/image/store1.png', alt: 'Giỏ hàng Giftlove', title : 'Login  '};

  //login
  nameInput: string;
  NameVisitor:string;
  checklogin(name, email){  
       if(this.Servicelibrary.checkEmail(email)==true && name!=''){
          this.nameInput = `Logout(${name})`;
          this.NameVisitor = name;
          var obj ={'name' : name, 'email':email };
          this.Servicelibrary.postemail(obj);
          document.getElementById('btn-name').style.display='block'
          document.getElementById('abcxyz').style.display='none';
          document.getElementById('login').style.display='none';
          
       }
       else{
         alert('Please check again information, field name is not empty, and mail valid'); 
       }
  }
  hiddenlogin(){
    document.getElementById('login').style.display='none';
  }
  showlogin(){
    document.getElementById('login').style.display='block';
  }
   
  linksearch;
  prodcutest;
  getDemo(input){

    if(input ==''|| this.Servicelibrary.getDetail2(input).name == undefined){
      alert('Not found');
    }
    else{
      this.linksearch ='/search/'+input;
    }

  
  }


    ngOnInit() {

    }

}
