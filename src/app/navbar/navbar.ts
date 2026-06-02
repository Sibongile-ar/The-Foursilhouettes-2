import { Component } from '@angular/core';
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
    constructor(
      public cartService: Cartservice,
      public authService: AuthService
    ) {}

    logout() {
      this.authService.logout();
    }
}
