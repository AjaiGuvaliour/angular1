import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { SelectedProductComponent } from './selected-product/selected-product.component';
import { HomeComponent } from './home/home.component';
import { UserLoginRegisterComponent } from './user-login-register/user-login-register.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ProductViewComponent } from './product-view/product-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    LoginComponent,
    CartListComponent,
    PaymentComponent,
    RegisterComponent,
    SelectedProductComponent,
    HomeComponent,
    UserLoginRegisterComponent,
    ShoppingComponent,
    ProductViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
