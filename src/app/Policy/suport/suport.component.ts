import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suport',
  template: `
  <div class="rows" id='policy-suport'>
    <div class='policy-suport'>
      <p class='policy-name'>POLICY</p>
      <p class='policy-pagination'><a routerLink='/home'>Home </a>&raquo; Policy suport</p>
      <p class='policy-name2'>Policy suport</p>
      <div class='policy-content'>
      </div>
    </div>
  </div>
`,
  styles:[
    `.policy-suport{
        margin: 5% 4%;
        min-height: 300px;
    }
    .policy-suport  .policy-name{
        font-size: 21px;
        line-height: 20px;
        color:#252525;
    }
    .policy-suport .policy-pagination{
        display: inline;
        color: #f4574c;
        font-weight: 400;
    }
    .policy-suport .policy-pagination a{
        color: #8a8a8a;
        display: inline;
    }
    .policy-suport .policy-pagination a:hover{
        color: #f4574c;
    }
    .policy-suport  .policy-name2{
        font-weight: bold;
        font-size: 21px;

    }`]
})
export class SuportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
