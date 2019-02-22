import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';


const routes: Routes = [
    {
        path:'',
        redirectTo:'adminHome',
        pathMatch:'full'
      },
      {
        path: 'adminHome',
        component:AdminHomeComponent,
        children:[
            {
                path:'',
                component:ManageProductsComponent
            },
          {
            path:'add',
            component:AddProductsComponent
          },
        ]
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }