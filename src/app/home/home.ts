import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Productservice } from '../services/productservice';
import { Cartservice } from '../services/cartservice';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

  products: any[] = [];

  selectedSizes: { [key: number]: string } = {};

  constructor(
    private productService: Productservice,
    private cartService: Cartservice
  ) {
    this.products = this.productService.getProducts();
  }

  addToCart(product: any) {

    const selectedSize = this.selectedSizes[product.id];

    if (!selectedSize) {
      alert('Please select a size!');
      return;
    }

    const cartProduct = {
      ...product,
      size: selectedSize,
      quantity: 1
    };

    this.cartService.addToCart(cartProduct);

    alert('Added to cart!');
  }
}
