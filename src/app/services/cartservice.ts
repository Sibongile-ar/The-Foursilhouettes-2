import { Injectable, inject } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class Cartservice {

  cart: any[] = [];
  private authService = inject(AuthService);

  constructor() {
    this.loadCart();
  }

  private getCartKey(): string {
    const user = this.authService.getCurrentUser();
    return user?.id ? `cart_${user.id}` : 'cart_guest';
  }

  private loadCart(): void {
    const key = this.getCartKey();
    const savedCart = localStorage.getItem(key);
    this.cart = savedCart ? JSON.parse(savedCart) : [];
  }

  private saveCart(): void {
    const key = this.getCartKey();
    localStorage.setItem(key, JSON.stringify(this.cart));
  }

  refreshCart(): void {
    this.loadCart();
  }

  resetLocalCart(): void {
    this.cart = [];
  }

  clearGuestCart(): void {
    localStorage.removeItem('cart_guest');
  }

  mergeGuestCartIntoUserCart(): void {
    const user = this.authService.getCurrentUser();
    if (!user?.id) {
      return;
    }

    const guestCart = JSON.parse(localStorage.getItem('cart_guest') || '[]');
    if (!guestCart.length) {
      return;
    }

    const userCartKey = `cart_${user.id}`;
    const existingUserCart = JSON.parse(localStorage.getItem(userCartKey) || '[]');

    guestCart.forEach((guestItem: any) => {
      const matched = existingUserCart.find(
        (item: any) => item.id === guestItem.id && item.size === guestItem.size
      );
      if (matched) {
        matched.quantity += guestItem.quantity;
      } else {
        existingUserCart.push(guestItem);
      }
    });

    localStorage.setItem(userCartKey, JSON.stringify(existingUserCart));
    localStorage.removeItem('cart_guest');
    this.cart = existingUserCart;
  }

  addToCart(product: any): boolean {
    this.loadCart();

    const existingProduct = this.cart.find(
      item =>
        item.id === product.id &&
        item.size === product.size
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        size: product.size,
        quantity: 1
      });
    }

    this.saveCart();
    return true;
  }

  getCart() {
    this.loadCart();
    return this.cart;
  }

  getCartCount(): number {
    this.loadCart();

    let totalQty = 0;
    this.cart.forEach(item => {
      totalQty += item.quantity;
    });

    return totalQty;
  }

  removeItem(index: number): void {
    this.loadCart();
    this.cart.splice(index, 1);
    this.saveCart();
  }

  increaseQty(index: number): void {
    this.loadCart();
    this.cart[index].quantity++;
    this.saveCart();
  }

  decreaseQty(index: number): void {
    this.loadCart();

    if (this.cart[index].quantity > 1) {
      this.cart[index].quantity--;
    } else {
      this.cart.splice(index, 1);
    }

    this.saveCart();
  }

  calculateTotal(): number {
    this.loadCart();

    let total = 0;
    this.cart.forEach(item => {
      total += item.price * item.quantity;
    });

    return total;
  }
}