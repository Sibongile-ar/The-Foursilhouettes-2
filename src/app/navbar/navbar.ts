import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cartservice } from '../services/cartservice';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
    constructor(public cartService: Cartservice) {}


}
