import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },       // Página principal
  { path: 'product/:id', component: ProductViewComponent }, // Vista producto
  { path: 'login', component: LoginComponent }, // Login
];