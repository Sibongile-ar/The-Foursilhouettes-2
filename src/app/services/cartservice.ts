import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Cartservice {

  cart: any[] = [];

  constructor() {
    const savedCart = localStorage.getItem('cart');

    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
  }

  addToCart(product: any) {
    this.cart.push(product);

    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getCart() {
    return this.cart;
  }

  getCartCount() {
    return this.cart.length;
  }
}
