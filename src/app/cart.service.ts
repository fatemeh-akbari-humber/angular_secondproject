import { Injectable } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];

  addToCart(product: Product) {
    this.cart.push(product);
  }

  getCartItems() {
    return this.cart;
  }

  getCartCount() {
    return this.cart.length;
  }
}
