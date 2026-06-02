import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Cartservice } from '../services/cartservice';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
    cartService = inject(Cartservice);
    authService = inject(AuthService);

    logout() {
      this.authService.logout();
    }
}
