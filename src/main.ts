import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { ProductListComponent } from './app/product-list/product-list.component';
import { CartComponent } from './app/cart/cart.component';

const routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
