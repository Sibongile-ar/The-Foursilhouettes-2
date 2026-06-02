import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {

  auth = inject(AuthService);
  router = inject(Router);
  toastr = inject(ToastrService);

  user = {
    name: '',
    email: '',
    password: ''
  };

  register() {
    if (!this.isValidEmail(this.user.email)) {
      this.toastr.error('Please enter a valid email address like john@gmail.com');
      return;
    }

    const success = this.auth.register(this.user);

    if (success) {
      this.toastr.success('Registration successful');
      this.router.navigate(['/login']);
    } else {
      this.toastr.error('Email already exists');
    }
  }

  private isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email.trim());
  }
}