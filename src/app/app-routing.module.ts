import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component'
import { ProductListComponent } from './product-list/product-list.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [{
  path: 'product-list', 
  component: ProductListComponent
}, {
  path: 'shopping-cart',
  component: ShoppingCartComponent
}, {
  path: 'order',
  component: OrderComponent
}, {
  path: '',
  redirectTo: '/product-list',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
