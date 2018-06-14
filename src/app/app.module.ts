import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule} from '@agm/core';

//default
import { AppComponent } from './app.component';
import { SliderComponent } from './show-home/slider/slider.component';
//show-home
import { ShowHomeComponent } from './show-home/show-home.component';
import { StoreSaleComponent } from './show-home/store-sale/store-sale.component';
import { ShowsanphamComponent } from './show-home//showsanpham/showsanpham.component';
import { NewproduceComponent } from './show-home/newproduce/newproduce.component';
//show-fresh
import { ShowProductFreshComponent } from './show-product-fresh/show-product-fresh.component';
//show-special
import { ShowProductSpecialComponent } from './show-product-special/show-product-special.component';
//show-thankful
import { ShowProductThankfulComponent } from './show-product-thankful/show-product-thankful.component';
//show-contact
import { ShowProductContactComponent } from './show-product-contact/show-product-contact.component';

//default

//policy
  import { SuportComponent } from './Policy/suport/suport.component';
  import { LocationComponent } from './Policy/location/location.component';
  import { PayComponent } from './Policy/pay/pay.component';
  import { TransforComponent } from './Policy/transfor/transfor.component';

//sevice
import { LibraryService } from './library.service';
//routing
import { AppRoutingModule } from './/app-routing.module';
import { DetailproductComponent } from './detailproduct/detailproduct.component';
import { Http, HttpModule } from '@angular/http';
import { Newproduct2Component } from './show-home/newproduct2/newproduct2.component';
import { SearchComponent } from './search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    StoreSaleComponent,
    NewproduceComponent,
    ShowsanphamComponent,
    ShowHomeComponent,
    ShowProductFreshComponent,
    ShowProductSpecialComponent,
    ShowProductThankfulComponent,
    ShowProductContactComponent,
    SuportComponent,
    LocationComponent,
    PayComponent,
    TransforComponent,
    DetailproductComponent,
    Newproduct2Component,
    SearchComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  bootstrap: [AppComponent],
  providers: [LibraryService]
})
export class AppModule { }
