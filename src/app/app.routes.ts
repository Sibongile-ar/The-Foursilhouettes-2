import { Routes } from '@angular/router';
import { About } from './about/about';
import { Cart } from './cart/cart';
import { Home } from './home/home';
import { Shop } from './shop/shop';

export const routes: Routes = [
     {path:'about',component: About},
    {path:'cart',component: Cart},
    {path:'home',component: Home},
    {path:'shop',component: Shop},
];
