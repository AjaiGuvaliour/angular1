import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductsComponent } from './add-products/add-products.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';

@NgModule({
  declarations: [AddProductsComponent, ManageProductsComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
