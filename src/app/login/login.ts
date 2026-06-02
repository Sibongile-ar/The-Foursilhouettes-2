import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Authservice } from '../services/authservice';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  authService = inject(Authservice);
  router = inject(Router);

  email = '';
  password = '';

  login() {

    const success = this.authService.login(
      this.email,
      this.password
    );

    if (success) {

      alert('Login successful');

      this.router.navigate(['/cart']);

    } else {

      alert('Invalid email or password');
    }
  }

}