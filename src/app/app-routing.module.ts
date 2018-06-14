import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 

import { ShowHomeComponent }   from './show-home/show-home.component';
import { ShowProductFreshComponent }      from './show-product-fresh/show-product-fresh.component';
import { ShowProductSpecialComponent }  from './show-product-special/show-product-special.component';
import { ShowProductThankfulComponent }  from './show-product-thankful/show-product-thankful.component';
import { ShowProductContactComponent, }  from './show-product-contact/show-product-contact.component';

import { TransforComponent } from './Policy/transfor/transfor.component';
import { PayComponent } from './Policy/pay/pay.component';
import { LocationComponent } from './Policy/location/location.component';
import { SuportComponent } from './Policy/suport/suport.component';
import { DetailproductComponent } from './detailproduct/detailproduct.component'
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ShowHomeComponent },
  { path: 'fresh', component: ShowProductFreshComponent},
  { path: 'special', component: ShowProductSpecialComponent },
  { path: 'thankful', component: ShowProductThankfulComponent },
  { path: 'contact', component: ShowProductContactComponent},
  { path: 'policy/transfor', component: TransforComponent },
  { path: 'policy/pay', component: PayComponent },
  { path: 'policy/identifier', component: LocationComponent},
  { path: 'policy/support', component: SuportComponent },
  { path: 'order/:id', component: DetailproductComponent },
  { path: 'search/:name', component: SearchComponent}
];

 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}