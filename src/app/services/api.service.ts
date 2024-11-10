
// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private productApiUrl = 'https://fakestoreapi.com/products';
  private userApiUrl = 'https://fakestoreapi.com/users';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productApiUrl);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productApiUrl, product);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userApiUrl);
  }
}
