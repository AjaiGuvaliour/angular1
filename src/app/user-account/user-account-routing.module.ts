import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserCrtListComponent } from './user-crt-list/user-crt-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'userprofile',
    pathMatch: 'full'
  },
  {
    path:'userprofile',
    component:UserprofileComponent,
    children:[
      {
        path:'',
        redirectTo:'userdetails',
        pathMatch:'full'
      },
      {
        path:'userdetails',
        component:UserDetailsComponent
      },
      {
        path:'usercartdetails',
        component: UserCrtListComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAccountRoutingModule { }
