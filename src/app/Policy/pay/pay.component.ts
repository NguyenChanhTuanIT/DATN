import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay',
  template: `
      <div class="rows" id='policy-pay'>
        <div class='policy-pay'>
          <p class='policy-name'>POLICY</p>
          <p class='policy-pagination'><a routerLink='/home'>Home </a>&raquo; Policy pay</p>
          <p class='policy-name2'>Policy pay</p>
          <div class='policy-content'>
          </div>
        </div>
      </div>
  `,
  styles:[
    `.policy-pay{
        margin: 5% 4%;
        min-height: 250px;
    }
    .policy-pay  .policy-name{
        font-size: 21px;
        line-height: 20px;
        color:#252525;
    }
    .policy-pay .policy-pagination{
        display: inline;
        color: #f4574c;
        font-weight: 400;
    }
    .policy-pay .policy-pagination a{
        color: #8a8a8a;
        display: inline;
    }
    .policy-pay .policy-pagination a:hover{
        color: #f4574c;
    }
    .policy-pay  .policy-name2{
        font-weight: bold;
        font-size: 21px;

    }`]
})
export class PayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
