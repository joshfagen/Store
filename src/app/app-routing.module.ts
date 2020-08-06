import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Customers } from './customers/customers.component';
import { Orders } from './orders/orders.component';
import { Products } from './products/products.component';


const routes: Routes = [ 
  { path: 'customers', component: Customers }, 
  { path: 'orders', component: Orders },
  { path: 'products', component: Products }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
