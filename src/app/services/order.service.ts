import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Order } from '../model/Order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

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

  order(order: Order): Observable<any> {
    return this.http.post<Order>(this.baseurl + '/order', order, this.httpOptions);
  }

}
