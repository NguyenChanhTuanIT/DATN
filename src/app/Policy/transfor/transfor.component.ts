import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfor',
  template: `
      <div class="rows" id='policy-transfor'>
        <div class='policy-transfor'>
          <p class='policy-name'>POLICY</p>
          <p class='policy-pagination'><a routerLink='/home'>Home </a>&raquo; Policy transfor</p>
          <p class='policy-name2'>Policy transfor</p>
          <div class='policy-content'>
          </div>
        </div>
      </div>
  `,
  styles:[
    `.policy-transfor{
        margin: 5% 4%;
        min-height: 300px;
    }
    .policy-transfor  .policy-name{
        font-size: 21px;
        line-height: 20px;
        color:#252525;
    }
    .policy-transfor .policy-pagination{
        display: inline;
        color: #f4574c;
        font-weight: 400;
    }
    .policy-transfor .policy-pagination a{
        color: #8a8a8a;
        display: inline;
    }
    .policy-transfor .policy-pagination a:hover{
        color: #f4574c;
    }
    .policy-transfor  .policy-name2{
        font-weight: bold;
        font-size: 21px;

    }`]
})
export class TransforComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
