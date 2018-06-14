import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-home',
  template: 
  `<div class="show_home">
  <app-slider></app-slider>
  <app-store-sale></app-store-sale>
  <app-newproduce></app-newproduce>
  <app-newproduct2></app-newproduct2>
  </div>`
  ,
  styles: []
})
export class ShowHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
