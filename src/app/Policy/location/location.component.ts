import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  template: `
  <div class="rows" id='policy-identifier'>
    <div class='policy-identifier'>
      <p class='policy-name'>POLICY</p>
      <p class='policy-pagination'><a routerLink='/home'>Home </a>&raquo; Policy identifier</p>
      <p class='policy-name2'>Policy identifier</p>
      <div class='policy-content'>
      </div>
    </div>
  </div>
  `,
  styles:[
    `.policy-identifier{
        margin: 5% 4%;
        min-height: 300px;
    }
    .policy-identifier  .policy-name{
        font-size: 21px;
        line-height: 20px;
        color:#252525;
    }
    .policy-identifier .policy-pagination{
        display: inline;
        color: #f4574c;
        font-weight: 400;
    }
    .policy-identifier .policy-pagination a{
        color: #8a8a8a;
        display: inline;
    }
    .policy-identifier .policy-pagination a:hover{
        color: #f4574c;
    }
    .policy-identifier .policy-name2{
        font-weight: bold;
        font-size: 21px;

    }`]
})
export class LocationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
