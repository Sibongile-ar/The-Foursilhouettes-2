import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Cartservice } from '../services/cartservice';
import { Productservice } from '../services/productservice';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-shop',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {

  productService = inject(Productservice);
  productList = this.productService.getProduct();

  cartService = inject(Cartservice);


  toastr = inject(ToastrService);

  selectedSizes: { [key: number]: string } = {};

  searchText: string = '';

  selectedCategory: string = 'All';



  addToCart(product: any) {

    const selectedSize = this.selectedSizes[product.id];

    if (!selectedSize) {
      this.toastr.error('Please select a size!');
      return;
    }


    const cartProduct = {
      ...product,
      size: selectedSize,
      quantity: 1
    };

    this.cartService.addToCart(cartProduct);

     this.toastr.success('Added to Cart');
  }

  setCategory(cat: string) {
    this.selectedCategory = cat;
  }


  filteredList() {
    return this.productList.filter(product => {
  
      const matchesSearch =
        product.title.toLowerCase().includes(this.searchText.toLowerCase());
  
      const matchesCategory =
        this.selectedCategory === 'All' ||
        product.category === this.selectedCategory;
  
      return matchesSearch && matchesCategory;
    });
  }
}