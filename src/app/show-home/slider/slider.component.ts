import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  template: `
  <div class="row" style="margin-bottom: 10px;">
  <div class="slider">
      <div [ngSwitch]='demo'>
      <img  *ngSwitchCase="1" [src]="slider[0].src" alt="Quảng cáo Giftlove 1" >
      <img *ngSwitchCase="2" [src]="slider[1].src" alt="Quảng cáo Giftlove 2">
      <img *ngSwitchCase="3" [src]="slider[2].src" alt="Quảng cáo Giftlove 3">

      </div>
      <button class="case"  (click)="next()"></button>
      <button class="case" (click)="pre()" ></button>
  </div>
</div>
<div>
   <div class="under_slider">
      <ul>
          <li *ngFor='let item of underSlider'>
              <img [src]='item.src' [alt]='item.alt'>
          </li>
      </ul>
   </div>
</div>
  
  `,
  styles:
  [`.slider{
    padding: 0;
    margin-bottom: 10px;
    position: relative;
}
.under_slider {
    min-height: 50px;

}
.under_slider ul {
    padding: 0; margin: 0;
}
.under_slider ul li{
    width: 25%;
    float: left;
    text-align: center;
    
}
.under_slider ul li img{
     width: 30%;
}
.case{ 
        width: 20px;
        height: 20px;
        background-color:  #f4574c;
        float: left;
        border-radius: 50%;
        text-align: center;
        float: right;
}
.case:hover{
    background-color: white;
     border:1px solid  #f4574c;
}
.slider img{
    position: relative;
    animation-name: sliderr;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}
@keyframes sliderr{
    0%   {opacity: 0.7;}
    25%  {opacity: 0.8;}
    50%  {opacity: 0.9;}
    100% {opacity: 1;}
}
`]
})
export class SliderComponent implements OnInit {

  underSlider =  [
    {id : 1,src : '../assets/image/section1_1.png', alt: 'Giftlove', title : 'pre'},
    {id : 2,src : '../assets/image/section1_2.png', alt: 'Giftlove', title : 'next'},
    {id : 3,src : '../assets/image/section1_3.png', alt: 'Slide Giftlove', title : 'Slider'},
    {id : 4,src : '../assets/image/section1_4.png', alt: 'Giftlove', title : 'pre'}
  ];
  slider =
  [{id : 1,src : '../assets/image/Slider/slider_1.jpg', alt: 'Slide Giftlove', title : 'Slider'},
  {id : 2,src : '../assets/image/Slider/slider_2.jpg', alt: 'Slide Giftlove', title : 'Slider'},
  {id : 3,src : '../assets/image/Slider/slider_3.jpg', alt: 'Slide Giftlove', title : 'Slider'}];

  demo :number = 1;
  
  next():number{
      if(this.demo==3)
        return this.demo=1;
        else 
        return this.demo+=1;
  }
  pre():number{
      if(this.demo==1)
      return this.demo=3;
      else
      return this.demo-=1;
  } 
   autonext():number{
     return this.demo++;
   }
  
   constructor() { }
   

  ngOnInit() {
  

  }

}
