import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Base url
  baseurl = 'http://dev-livecode.codenga.pl/api/i-shop';

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // GET
  getProducts(): Observable<Product> {
    return this.http.get<Product>(this.baseurl + '/products');
  }
  
}
