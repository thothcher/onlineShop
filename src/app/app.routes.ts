import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Title } from '@angular/platform-browser';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [

    { path: '', component: MainComponent, title: 'Home' },
    { path: 'cart', component: CartComponent, title: 'Cart' },
    { path: 'aboutus', component: AboutUsComponent, title: 'About us' },
    { path: 'details', component: DetailsComponent, title: 'Details' }

];
