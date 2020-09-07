import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/Product';
import { ShoopingCartService } from '../services/shooping-cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any = [];

  constructor(private productService: ProductService, private shoopingCartService: ShoopingCartService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  // Products list
  loadProducts() {
    return this.productService.getProducts().subscribe((data: {}) => {
      console.log('data - ', data);
      this.products = data;
    });
  }

  addToCart(product: Product) {
    
    this.shoopingCartService.addToCart(product);
    console.log('result: ', this.shoopingCartService.getItems());
  }

  getItemsCounter() {
    return this.shoopingCartService.getItemsCounter();
  }

  getItemsPrice() {
    return this.shoopingCartService.getItemPrices();
  }

}
