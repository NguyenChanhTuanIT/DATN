import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-product-contact',
  template: 
  `
  <div class='rows elementpadding'>
    <p class='elementname'>Contact</p>
    <p class='elementpage'><a routerLink='/home'>Home </a>&raquo; Contact for us</p>
  </div>
  <div class='row map' id='googlemap'>
    <img [src]='linkcontact' alt='mapimg' />
  </div>

  
  `,
  styles: [
    `.map{
      background-color:#ebebeb;
      margin: 0 50px;
    }
    .map img{
      border:1px solid #ebebeb;
    }
    
    `
  ]
})
export class ShowProductContactComponent implements OnInit {
  linkcontact ='../assets/map.png';

  
  constructor() { }

  ngOnInit() {
  }

}
