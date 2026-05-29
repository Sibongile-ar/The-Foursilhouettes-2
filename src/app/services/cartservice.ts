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

    // check if product already exists with same size
    const existingProduct = this.cart.find(
      item =>
        item.id === product.id &&
        item.size === product.size
    );

    // increase quantity
    if (existingProduct) {

      existingProduct.quantity += 1;

    } else {

      // add new product
      this.cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        size: product.size,
        quantity: 1
      });
    }

    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getCart() {
    return this.cart;
  }

  getCartCount(): number {

    let totalQty = 0;

    this.cart.forEach(item => {

      totalQty += item.quantity;

    });

    return totalQty;
  }

  removeItem(index: number): void {

    this.cart.splice(index, 1);

    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  increaseQty(index: number): void {

    this.cart[index].quantity++;

    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  decreaseQty(index: number): void {

    if (this.cart[index].quantity > 1) {

      this.cart[index].quantity--;

    } else {

      this.cart.splice(index, 1);
    }

    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  calculateTotal(): number {

    let total = 0;

    this.cart.forEach(item => {

      total += item.price * item.quantity;

    });

    return total;
  }
}