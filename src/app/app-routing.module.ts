import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ProductsComponent } from './component/products/products.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Products',      component: ProductsComponent, canActivate: [AuthGuard] },
  { path: '',
    redirectTo: '/Login',
    pathMatch: 'full'
  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
