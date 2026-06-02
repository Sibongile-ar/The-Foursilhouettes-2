import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Cartservice } from '../services/cartservice';
import { Authservice } from '../services/authservice';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  cartService = inject(Cartservice);
  authService = inject(Authservice);
  router = inject(Router);

  logout() {

    this.authService.logout();

    this.router.navigate(['/home']);
  }

  goToCart() {

    if (!this.authService.isLoggedIn()) {

      alert('Please login first');

      this.router.navigate(['/login']);

      return;
    }

    this.router.navigate(['/cart']);
  }

}