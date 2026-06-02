import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Authservice } from '../services/authservice';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  authService = inject(Authservice);
  router = inject(Router);

  name = '';
  email = '';
  password = '';

  register() {

    const user = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.authService.register(user);

    alert('Registration successful');

    this.router.navigate(['/login']);
  }

}