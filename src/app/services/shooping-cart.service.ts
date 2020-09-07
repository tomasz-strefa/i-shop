import { Injectable } from '@angular/core';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ShoopingCartService {

  items: Array<Product> = [];
  static itemsCounter: number = 0;
  static itemsPrices: number = 0;

  constructor() { }

  addToCart(product: Product) {

    var exists: Boolean = false;
    this.items.forEach(function(item, index, theArray) {

      if(theArray[index].productId == product.productId) {
        exists = true;
        theArray[index].counter++;
        ShoopingCartService.itemsCounter += 1;
        ShoopingCartService.itemsPrices += product.price;
      }
    });

    if(!exists) {
      product.counter = 1;
      this.items.push(product);
      ShoopingCartService.itemsCounter += 1;
      ShoopingCartService.itemsPrices += product.price;
    }
  }

  deleteByIdx(index: number) {
    ShoopingCartService.itemsCounter -= this.items[index].counter;
    ShoopingCartService.itemsPrices -= (this.items[index].counter * this.items[index].price);
    this.items.splice(index, 1);
  }

  getItems() {
    console.log('get items = ', this.items);
    return this.items;
  }

  clearCart() {
    this.items = [];
    ShoopingCartService.itemsCounter = 0;
    ShoopingCartService.itemsPrices = 0;
    return this.items;
  }

  getItemsCounter() {
    return ShoopingCartService.itemsCounter;
  }

  getItemPrices() {
    return ShoopingCartService.itemsPrices;
  }
}
