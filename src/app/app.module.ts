import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { Products } from './products/products.component';
import { Customers } from './customers/customers.component';
import { Orders } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    Products,
    Customers,
    Orders,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
