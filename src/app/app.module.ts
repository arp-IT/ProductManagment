import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { ProductsComponent } from './component/products/products.component';
import { LoginService } from './service/login.service';
import { ProductListComponent } from './component/Products/product-list/product-list.component';
import { ProductDetailsComponent } from './component/Products/product-details/product-details.component';
import { ProductCountComponent } from './component/Products/product-count/product-count.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
