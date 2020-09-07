import { Component, OnInit } from '@angular/core';
import { ShoopingCartService } from '../services/shooping-cart.service';
import { Product } from '../model/Product';
import { Order } from '../model/Order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  products: Array<Product> = [];

  constructor(private shoopingCartService: ShoopingCartService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.products = this.getProducts();
  }

  getProducts() {
    return this.shoopingCartService.getItems();
  }

  getItemCounter() {
    return this.shoopingCartService.getItemsCounter();
  }

  getItemPrices() {
    return this.shoopingCartService.getItemPrices();
  }

  createOrder() {
    console.log('send request');

    const order = new Order();
    order.products = this.products;
    order.productsCounter = this.getItemCounter();
    order.productsPrice = this.getItemPrices();

    this.orderService.order(order).subscribe(data => {
      this.shoopingCartService.clearCart();
      this.ngOnInit();
      alert('Zamówienie zostało zrealizowane!');
    }, err => {
      alert('Wystąpił problem podczas realizacji zamówienia!');
    });
  }

}
