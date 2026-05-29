import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Productservice } from '../services/productservice';
import { Cartservice } from '../services/cartservice';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {

  cartService = inject(Cartservice);
  productService = inject(Productservice);
  productList = this.productService.getProduct();

  cartItems: any[] = [];

  total: number = 0;

  ngOnInit(): void {

    this.cartItems = this.cartService.getCart();

    this.calculateTotal();
  }

  calculateTotal(): void {

    this.total = this.cartService.calculateTotal();
  }

  increaseQty(index: number): void {

    this.cartService.increaseQty(index);

    this.cartItems = this.cartService.getCart();

    this.calculateTotal();
  }

  decreaseQty(index: number): void {

    this.cartService.decreaseQty(index);

    this.cartItems = this.cartService.getCart();

    this.calculateTotal();
  }

  removeItem(index: number): void {

    this.cartService.removeItem(index);

    this.cartItems = this.cartService.getCart();

    this.calculateTotal();
  }
}