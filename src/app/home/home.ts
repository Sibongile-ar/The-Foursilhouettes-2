import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Productservice } from '../services/productservice';
import { Cartservice } from '../services/cartservice';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

  productService = inject(Productservice);
  cartService = inject(Cartservice);

  products: any[] = this.productService.getProduct().slice(0, 5);

  selectedSizes: { [key: number]: string } = {};

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
