import { Component, OnInit } from '@angular/core';
import { ShoopingCartService } from '../services/shooping-cart.service';
import { Product } from '../model/Product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  products: Array<Product> = [];

  constructor(private shoopingCartService: ShoopingCartService) { }

  ngOnInit(): void {
    this.products = this.getProducts();
  }

  getProducts() {
    return this.shoopingCartService.getItems();
  }

  clearCart() {
    this.shoopingCartService.clearCart();
    this.ngOnInit();
  }

  getItemCounter() {
    return this.shoopingCartService.getItemsCounter();
  }

  getItemPrices() {
    return this.shoopingCartService.getItemPrices();
  }

  deleteItem(productId: number) {
    console.log('delete: ', productId);
    var idx = null;
    this.products.forEach(function(item, index, theArray) {

      if(theArray[index].productId == productId) {
        idx = index;
      }
    });

    this.shoopingCartService.deleteByIdx(idx);
  }
}
