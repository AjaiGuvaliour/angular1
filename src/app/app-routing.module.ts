import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SelectedProductComponent } from './selected-product/selected-product.component';
import { HomeComponent } from './home/home.component';
import { UserLoginRegisterComponent } from './user-login-register/user-login-register.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { PaymentComponent } from './payment/payment.component';
import { CartListComponent } from './cart-list/cart-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path: 'home',
    component:HomeComponent,
    children:[
      {
        path:'',
        component:ProductComponent
      }
    ]
  },
  {
    path: 'shopping',
    component:ShoppingComponent,
    children:[
      {
        path: '',
        redirectTo:'productView',
        pathMatch:'full'
      },
      {
        path:'productView',
        component: ProductViewComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'cartdetails',
        component:CartListComponent
      },
      {
        path:'register',
        component:RegisterComponent
      },
      {
        path:'selectedData',
        component:SelectedProductComponent
      },
      {
        path: 'payment',
        component:PaymentComponent
      },
      {
        path:'userLoginRegister',
        component:UserLoginRegisterComponent
      },
      {
        path:'useraccount',
        loadChildren: "./user-account/user-account.module#UserAccountModule"
      }
    ]
  },
  {
    path:'admin',
    loadChildren:"./admin/admin.module#AdminModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
