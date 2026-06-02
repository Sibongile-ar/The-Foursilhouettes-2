import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {

  user = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  register() {

    const success = this.auth.register(this.user);

    if (success) {
      alert('Registration successful');
      this.router.navigate(['/login']);
    } else {
      alert('Email already exists');
    }
  }
}