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
  //baseUrl = 'http://localhost:8080/api/i-shop';

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

  // GET
  getProducts(): Observable<Product> {
    return this.http.get<Product>(this.baseurl + '/products');
  }

}
