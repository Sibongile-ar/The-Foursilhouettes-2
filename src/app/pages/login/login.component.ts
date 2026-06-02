import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  auth = inject(AuthService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  toastr = inject(ToastrService);

  email = '';
  password = '';

  login() {

    const success = this.auth.login(
      this.email,
      this.password
    );

    if (success) {
      this.toastr.success('Login successful');
      
      const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
      if (returnUrl) {
        this.router.navigateByUrl(returnUrl);
      } else {
        this.router.navigate(['/shop']);
      }
    } else {
      this.toastr.error('Invalid credentials');
    }
  }
}