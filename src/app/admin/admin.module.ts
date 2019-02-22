import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductsComponent } from './add-products/add-products.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

@NgModule({
  declarations: [AddProductsComponent, ManageProductsComponent, AdminHeaderComponent, AdminHomeComponent],
  imports: [
    CommonModule,AdminRoutingModule
  ]
})
export class AdminModule { }
