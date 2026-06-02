import { Routes } from '@angular/router';

import { About } from './about/about';
import { Cart } from './cart/cart';
import { Home } from './home/home';
import { Shop } from './shop/shop';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'about', component: About },
  { path: 'shop', component: Shop },
  { path: 'cart', component: Cart, canActivate: [authGuard] },
  { path: '**', component: Home }
];